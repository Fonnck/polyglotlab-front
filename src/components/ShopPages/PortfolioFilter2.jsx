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

export default function PortfolioFilter2({ user, contract, setContract }) {
  const [requests, setRequests] = useState();
  const [formValues, setFormValues] = useState();
  const { setLoading } = useLoader();
  const { selected } = useDashboardStore();

  useEffect(() => {
    if (user?.role === "customer") {
      getParentRequests(user?.identification);
    } else {
      if (selected === "Nuevas Solicitudes") {
        getRequests("inactive");
      } else if (selected === "Solicitudes Pendientes") {
        getRequests("pending");
      } else {
        getRequests("active");
      }
    }
  }, [selected]);

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

  const getParentRequests = async (parent_identification) => {
    try {
      setLoading(true);
      await supabase
        .from("students")
        .select("*")
        .in("status", ["inactive", "pending"])
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
    if (requests.length === 1) {
      console.log("FormValues:", values);
      setFormValues(values);
      setContract(2);
    }
  };

  return (
    <>
      <div className="filters clearfix pt-5">
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
              getNewRequests={getRequests}
              role={user?.role}
              startContract={() => setContract(1)}
            />
          ))}
        {contract === 1 && (
          <DocumentForm
            parentIdentification={user?.identification}
            onSubmitForm={(values) => {
              onSubmitForm(values);
            }}
            setContract={setContract}
          />
        )}
        {contract === 2 && (
          <Contract
            user={requests.length === 1 ? requests[0] : undefined}
            formValues={formValues}
            setContract={setContract}
          />
        )}
      </div>
    </>
  );
}
