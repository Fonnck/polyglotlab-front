/* eslint-disable no-unused-vars */
import { useState } from "react";
import { create } from "zustand";
import { useLoader } from "./useLoader";
import { supabase } from "../supabase/client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [itsboy, setItsboy] = useState(true);
  const [english, setEnglish] = useState("english");
  const { setLoading } = useLoader();
  const nav = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Necesitamos saber tu nombre";
    } else if (values.first_name.length < 2) {
      errors.first_name = "Tu nombre debe tener al menos 2 caracteres";
    }

    if (!values.last_name) {
      errors.last_name = "Necesitamos saber tu apellido";
    } else if (values.last_name.length < 2) {
      errors.last_name = "Tu apellido debe tener al menos 2 caracteres";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Correo electrónico inválido";
    }

    if (!values.phone) {
      errors.phone = "Necesitamos tu número de celular";
    } else if (values.phone.toString().length < 7) {
      errors.phone = "Número de celular demasiado corto";
    } else if (values.phone.toString().length > 15) {
      errors.phone = "Número de celular demasiado largo";
    }

    if (!values.identification) {
      errors.identification = "Necesitamos tu número de identificación";
    } else if (values.identification.length < 5) {
      errors.identification = "Número de identificación demasiado corto";
    } else if (values.identification.length > 20) {
      errors.identification = "Número de identificación demasiado largo";
    }

    if (!values.child_name) {
      errors.child_name =
        "Necesitamos saber el nombre de tu " + (itsboy ? "niño 👦🏻" : "niña 👧🏻");
    } else if (values.child_name.length < 2) {
      errors.child_name = `El nombre de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"} debe tener al menos 2 caracteres`;
    }
    if (!values.child_age) {
      errors.child_age = `Necesitamos saber la edad de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"}`;
    }
    return errors;
  };

  const signUp = async (values) => {
    setLoading(true);
    try {
      await supabase.auth
        .signUp({
          email: values.email,
          password: "2d6ef242fm..-",
        })
        .then((response) => {
          setLoading(false);
          if (response.error) {
            setLoading(false);
            throw response.error;
          }
          console.log("response: ", response);
          response.data && toast.success("¡Inscripción enviada con éxito!");
          createUser(values);
        });
    } catch (error) {
      setLoading(false);
      toast.error("Error al enviar la inscripción: " + error.message);
      console.error("Error inserting data: ", error.message);
    }
  };

  const createUser = async (values) => {
    setLoading(true);
    try {
      const result = await supabase
        .from("users")
        .insert({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone: values.phone + "",
          identification: values.identification,
          password: values.identification + "",
          role: "customer",
        })
        .select()
        .then((response) => {
          setLoading(false);
          if (response.data !== null) {
            console.log("response: ", response);
            response.error === null && toast.success("¡Usuario Creado!");
            createStudent(values, response.data[0].id);
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error("Error al enviar la inscripción: " + error.message);
      console.error("Error inserting data: ", error.message);
    }
  };

  const createStudent = async (values, parent_id) => {
    setLoading(true);
    console.log(parent_id);
    try {
      const result = await supabase
        .from("students")
        .insert({
          user_id: parent_id,
          first_name: values.child_name,
          last_name: values.last_name,
          age: values.child_age,
          language: values.language,
          gender: values.gender,
        })
        .select()
        .then((response) => {
          setLoading(false);
          if (response.error) {
            throw response.error;
          }
          console.log("response: ", response);
          response.data !== null && toast.success("¡Estudiante Creado!");
          response.data !== null && nav("/thank-you");
        });
      console.log("result: ", result);
    } catch (error) {
      setLoading(false);
      toast.error("Error al enviar la inscripción: /n" + error.message);
      console.error("Error inserting data: ", error.message);
    }
  };

  return {
    itsboy,
    setItsboy,
    english,
    setEnglish,
    validate,
    signUp,
  };
};

export const useSignInStore = create((set) => ({
  itsboy: true,
  setItsBoy: (value) => set({ itsboy: value }),
  english: true,
  setEnglish: (value) => set({ english: value }),
}));
