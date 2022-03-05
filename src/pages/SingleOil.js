import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InfoCard from "../components/cards/InfoCard";
import app from "../firebase";
import "firebase/firestore";
import PropsCard from "../components/cards/PropsCard";
import ComponentsCard from "../components/cards/ComponentsCard";
import Sidebar from "../components/navigation/Sidebar";
import Navigation from "../components/navigation/Navigation";
import { useAuth } from "../contexts/AuthContext";

const db = app.firestore();

function SingleOil() {
  const { currentUser } = useAuth();
  const url = window.location.href;
  const currentOil = url.split("/oil-details/")[1].split("%20").join(" ");
  const [oil, setOil] = useState([]);

  useEffect(() => {
    const oilCreds = async () => {
      const oilData = await db
        .collection("Oils")
        .where("name", "==", currentOil)
        .get();
      setOil(
        oilData.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    oilCreds();
  }, []);

  async function handleSave(){
    oil && oil.map((oil_info) =>{
      const setSaved = db.collection("Users").doc(currentUser.uid).collection("saved").doc(oil_info.oil_id).set({
        oil_name: oil_info.name,
        oil_id: oil_info.oil_id,
        oil_props: oil_info.Properties,
        oil_components: oil_info.components,
        oil_family: oil_info.family,
        oil_origin: oil_info.origin,
        oil_aroma: oil_info.aroma
      })
      return setSaved
    })
  }
  return (
    <div className="d-flex page-nav-contaier w-100 align-items-evenly">
      <Sidebar />
      <Navigation />
      <div className="page-container">
        <div className="page-wrapper flex-column">
          <div className="h-100">
            {oil &&
              oil.map((oil_info) => {
                return (
                  <>
                    <div className="pb-5">
                      <h1 className="text-center pb-0  pt-5 ">
                        {oil_info.name} <span><button onClick={handleSave}>save</button></span>
                      </h1>
                     
                      <div className="w-25 m-auto">
                        <hr className="orange-hr"></hr>
                      </div>
                    </div>

                    <InfoCard
                      family={oil_info.family}
                      origin={oil_info.origin}
                      aroma={oil_info.aroma}
                    />
                    <div className="d-flex pt-5">
                      <PropsCard properities={oil_info.Properties} />

                      <ComponentsCard properities={oil_info.components} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleOil;
