/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { supabase } from "../supabase/client";
import toast from "react-hot-toast";

export const useDashboard = (setRequests) => {

    const getNewRequests = async () => {
        try {
            const { data, error } = await supabase
                .from("students")
                .select('*')
                .eq("status", 'inactive')
                .select()
            /* .then((response) => {
                console.log(response);
                if (response.data.length > 0) {
                    setNewRequests(response.data);
                } else {
                    throw 'No hay nuevas solicitudes'
            }
            }) */
            console.log(data);
            if (data.length > 0) {
                setRequests(data);
            }
            else {
                throw 'No hay nuevas solicitudes'
            }
        } catch (error) {
            toast.error(error.message)
            return null;
        }
    };

    return {
        getNewRequests,
    };
};

export const useDashboardStore = create((set) => ({
    selected: 'Nuevas Solicitudes',
    setSelected: (value) => set({ selected: value }),
    newRequests: [],
    setNewRequests: (values) => set({ ...values })
}));