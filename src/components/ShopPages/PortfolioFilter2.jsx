/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProductImage1 from "../../assets/images/resource/products/1.jpg";
import { useDashboardStore } from "../../hooks/useDashboard";
import toast from "react-hot-toast";
import { supabase } from "../../supabase/client";
import { Rectangle } from "./Rectangle";
import { useLoader } from "../../hooks/useLoader";
import { Contract } from "./Contract";
import DocumentForm from "./DocumentForm";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import { DownLoadPDF, Quixote } from "./DownLoadPDF";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default function PortfolioFilter2({
  user,
  contract,
  setContract,
  requests,
  setRequests,
  downLoadFiles,
}) {
  const [formValues, setFormValues] = useState();
  const { setLoading } = useLoader();
  const { selected, setSelected } = useDashboardStore();
  const [indexSelected, setIndexSelected] = useState(0);

  useEffect(() => {
    if (user?.role === "customer") {
      setSelected("Mi Suscripción");
    } else {
      setSelected("Solicitudes Completadas");
    }
  }, []);

  useEffect(() => {
    console.log(selected);
    if (user?.role === "customer") {
      if (selected === "Mi Suscripción") {
        getParentRequests(user?.identification);
      } else {
        //Get parent selected
        setRequests([]);
      }
    } else {
      if (selected === "Solicitudes Pendientes") {
        getRequests("pending");
      } else if (selected === "Solicitudes Completadas") {
        getRequests("active");
      } else if (selected === "Pagos") {
        setRequests([]);
      }
    }
  }, [selected, indexSelected]);

  const refresh = () => {
    if (user?.role === "customer") {
      if (selected === "Mi Suscripción") {
        getParentRequests(user?.identification);
      } else {
        //Get parent selected
        setRequests([]);
      }
    } else {
      getRequests("active");
    }
  };

  const getRequests = async (status) => {
    try {
      setLoading(true);
      await supabase
        .from("students")
        .select("*")
        .eq("status", status)
        .select()
        .then(({ data, error }) => {
          setLoading(false);
          if (error === null) {
            console.log("request", data);
            setRequests(data);
          } else {
            console.log(error);
            throw "No hay nuevas solicitudes";
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getParentRequests = async (parent_identification) => {
    try {
      setLoading(true);
      await supabase
        .from("students")
        .select("*")
        // .in("status", ["inactive", "pending"])
        .eq("parent_id", parent_identification)
        .then(({ data, error }) => {
          setLoading(false);
          if (error === null) {
            console.log(data);
            setRequests(data);
          } else {
            console.log(error);
            throw "No hay nuevas solicitudes";
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitForm = (values) => {
    console.log("sub niggas");

    if (requests.length > 0) {
      console.log("FormValues:", values);
      setFormValues({
        ...values,
        identificationPlace:
          values.identificationPlace === "Otro ¿Cuál?"
            ? values.identificationPlaceOther
            : values.identificationPlace,
        idCardPlace:
          values.idCardPlace === "Otro ¿Cuál?"
            ? values.idCardPlaceOther
            : values.idCardPlace,
      });
      setContract(2);
    }
  };

  return (
    <>
      <div className="filters clearfix">
        <h3>{selected}</h3>
        {/* <ul className="filter-tabs filter-btns clearfix">
					<li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
					<li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Book</li>
					<li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Digital</li>
					<li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Language</li>
					<li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Technology</li>
					<li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Studies</li>
				</ul> */}
      </div>
      <div
        className={`items-container row ${contract ? "page_container" : ""}`}
      >
        {/* Your product blocks here */}
        {!contract &&
          requests?.map((e, i) => (
            <Rectangle
              key={i}
              e={e}
              i={i}
              setContract={setContract}
              role={user?.role}
              startContract={() => setContract(1)}
              setIndexSelected={setIndexSelected}
              downLoadFiles={downLoadFiles}
              refresh={getParentRequests}
            />
          ))}
        {contract === 1 && (
          <DocumentForm
            parentIdentification={user?.identification}
            onSubmitForm={(values) => {
              console.log("sup body");
              onSubmitForm(values);
            }}
            setContract={setContract}
          />
        )}
        {contract === 2 && (
          <Contract
            user={requests[indexSelected]}
            formValues={formValues}
            setContract={setContract}
            refresh={refresh}
          />
        )}
        {contract === 4 && (
          <DownLoadPDF
            requests={requests}
            index={indexSelected}
            student={
              // requests.length > 1 ? requests[indexSelected] : requests[0]
              requests[indexSelected]
            }
          />
        )}
      </div>
      {contract === 5 && (
        <button
          className="button-74"
          type="submit"
          name="submit-form"
          onClick={() => {
            refresh();
            setContract(null);
            setSelected("Mi Suscripción");
          }}
        >
          <span className="blink">VER SUSCRIPCIÓN</span>
        </button>
      )}
    </>
  );
}
