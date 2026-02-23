/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { supabase } from "../supabase/client";
import toast from "react-hot-toast";
import { useLoader } from "./useLoader";

export const useDashboard = (setRequests) => {
  const { setLoading } = useLoader();

  const getNewRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("status", "inactive")
        .select();
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
      } else {
        throw "No hay nuevas solicitudes";
      }
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  const updateStudentStatus = async (student_id, payload) => {
    console.log(student_id);
    try {
      setLoading(true);
      await supabase
        .from("students")
        .update(payload)
        .eq("id", student_id)
        .select("*")
        .then((response) => {
          console.log(response);
          setLoading(false);
          if (response.data.length > 0) {
            setLoading(false);
            console.log(response.data);
            getNewRequests();
          } else {
            console.log(response.error);
            toast.error(response.error);
            throw response.error;
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return {
    getNewRequests,
  };
};

export const useDashboardStore = create((set) => ({
  selected: "Nuevas Solicitudes",
  setSelected: (value) => set({ selected: value }),
  newRequests: [],
  setNewRequests: (values) => set({ ...values }),
}));
