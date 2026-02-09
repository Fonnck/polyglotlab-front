import Router from "./Router.jsx";
import { useEffect } from "react";
import Loader from "./components/Helper/Loader.jsx";
import { Toaster } from "react-hot-toast";
import { useLoader } from "./hooks/useLoader.js";

function App() {
  const { loading, setLoading } = useLoader();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
