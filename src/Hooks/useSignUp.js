/* eslint-disable no-unused-vars */
import { useState } from "react";
import { create } from "zustand";
import { useLoader } from "./useLoader";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const [itsboy, setItsboy] = useState(true);
  const [english, setEnglish] = useState(true);
  const [french, setFrench] = useState(false);
  const { setLoading } = useLoader();
  const { user, setUser } = useSignInStore();

  const nav = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.child_name) {
      errors.child_name =
        "Necesitamos saber el nombre de tu " + (itsboy ? "niño 👦🏻" : "niña 👧🏻");
    } else if (values.child_name.length < 2) {
      errors.child_name = `El nombre de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"} debe tener al menos 2 caracteres`;
    }
    if (!values.child_age) {
      errors.child_age = `Necesitamos saber la edad de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"}`;
    }

    if (!values.identification) {
      errors.identification = "Necesitamos tu número de identificación";
    } else if (values.identification.length < 5) {
      errors.identification = "Número de identificación demasiado corto";
    } else if (values.identification.length > 20) {
      errors.identification = "Número de identificación demasiado largo";
    }

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

    console.log(values.verified);

    if (!values.verified) {
      errors.verified = `Debes aceptar los términos y condiciones, antes de continuar`;
    }

    return errors;
  };
  const validateLogIn = (values) => {
    const logInErrors = {};

    console.log("doinggg", values);

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      logInErrors.email = "Correo electrónico inválido";
    }

    if (!values.identification) {
      logInErrors.identification = "Necesitamos tu contraseña";
    } else if (values.identification.length < 5) {
      logInErrors.identification = "Número de identificación demasiado corto";
    } else if (values.identification.length > 20) {
      logInErrors.identification = "Número de identificación demasiado largo";
    }

    console.log(values.verified);

    if (!values.verified) {
      logInErrors.verified = `Debes aceptar los términos y condiciones, antes de continuar`;
    }

    return logInErrors;
  };

  const signUp = async (values) => {
    setLoading(true);
    try {
      await supabase.auth
        .signUp({
          email: values.email,
          password: "2d6ef242fm..-",
          options: {
            emailRedirectTo: "https://polyglotlabacademy/product-sidebar",
          },
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
          last_name: values.child_lastname,
          age: values.child_age,
          language: values.language,
          gender: values.gender,
          parent_firstname: values.first_name,
          parent_lastname: values.last_name,
          parent_id: values.identification,
          parent_email: values.email,
          parent_phone: values.phone,
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

  const getUserLogin = async (email, identification) => {
    setLoading(true);
    try {
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("identification", identification)
        .select()
        .then((response) => {
          // console.log('This is the response', response.data[0].email);
          setLoading(false);
          if (response.data.length > 0) {
            console.log("Enviando a: " + response.data[0].email);
            console.log("Enviando a: " + response.data[0].identification);
            console.log("setting up", response.data[0]);
            setUser(response.data[0]);
            signInWithPassword(response.data[0].email, "2d6ef242fm..-");
            return response.data;
          } else {
            throw "Usuario o Contraseña Incorrectos";
          }
        });
    } catch (error) {
      setLoading(false);
      console.log("userinfo: " + user);

      if (user === undefined) {
        toast.error(error);
      }
      console.error("Error LogIn data: ", error);
    }
  };

  const getUserByEmail = async (email) => {
    setLoading(true);
    try {
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .select()
        .then((response) => {
          // console.log('This is the response', response.data[0].email);
          setLoading(false);
          if (response.data.length > 0) {
            console.log("Enviando a: " + response.data[0].email);
            console.log("setting up", response.data[0]);
            setUser(response.data[0]);
            return response.data;
          } else {
            throw "Usuario o Contraseña Incorrectos";
          }
        });
    } catch (error) {
      setLoading(false);
      console.log("userinfo: " + user);

      if (user === undefined) {
        toast.error(error);
      }
      console.error("Error LogIn data: ", error);
    }
  };

  const getMagicLink = async (email) => {
    setLoading(true);
    try {
      await supabase.auth
        .signInWithOtp({
          email: email,
          options: {
            // set this to false if you do not want the user to be automatically signed up
            shouldCreateUser: false,
            emailRedirectTo: "https://polyglotlabacademy.com/confirmed",
          },
        })
        .then((response) => {
          console.log("This is the response MagicLink", response);
          setLoading(false);
          if (response.error === null) {
            console.log("datas: " + response.data);
            toast.success("Link de inicio de sesión enviado éxitosamente!");
            return response.data;
          } else {
            console.log("error: " + response.error);
            throw "error: " + response.error;
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error(error);
      console.error("Error LogIn data: ", error);
    }
  };

  const signInWithPassword = async (email, password) => {
    setLoading(true);
    try {
      await supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then((response) => {
          setLoading(false);
          if (response.data.user) {
            console.log("datas: " + response.data);
            toast.success("Inicio de sesión éxitosamente!");
            nav("/products-sidebar");
            return response.data;
          } else {
            console.log("error: " + response.error);
            throw "Credenciales Incorrectas o Usuario NO registrado";
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error(error);
      console.error("Error LogIn data: ", error);
    }
  };

  const logIn = async ({ email, identification }) => {
    setLoading(true);
    try {
      getUserLogin(email, identification);
      /* await supabase.auth.signInWithPassword({
        email,
        password
      })
        .then(({ data, error }) => {
          console.log('This is the response', { data, error });
          setLoading(false);
          if (error === null) {
            console.log('dataUser', data);
          } else {
            console.log('LogIn Error: ', error);
            toast.error('LogIn Error: ', error.message)
            throw error;
          }
        }) */
    } catch (error) {
      setLoading(false);
      toast.error("LogIn Error: ", error);
    }
  };

  const signOut = async () => {
    console.log("Logout");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    const { error } = await supabase.auth.signOut();
    setUser(undefined);
    nav("/");
    if (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return {
    itsboy,
    setItsboy,
    english,
    setEnglish,
    french,
    setFrench,
    validate,
    signUp,
    logIn,
    signOut,
    validateLogIn,
    getUserByEmail,
  };
};

export const useSignInStore = create((set) => ({
  itsboy: true,
  setItsBoy: (value) => set({ itsboy: value }),
  english: true,
  setEnglish: (value) => set({ english: value }),
  user: undefined,
  setUser: (values) => set({ user: { ...values } }),
}));
