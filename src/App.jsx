/* eslint-disable no-unused-vars */
import Router from "./Router.jsx";
import { useEffect, useRef } from "react";
import Loader from "./components/Helper/Loader.jsx";
import { Toaster } from "react-hot-toast";
import { useLoader } from "./hooks/useLoader.js";
import { useScrollStore } from "./hooks/useScrollSrore.js";
import { supabase } from "./supabase/client.js";
import { useNavigate } from "react-router-dom";

function App() {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { setSectionRef } = useScrollStore()

  const sectionRef = useRef(null);
  useEffect(() => {
    setSectionRef(sectionRef);
  }, []);

  return (
    <>
      {loading && (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`appie-visible ${loading === false ? "active" : ""}`}>
        <Router />
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
