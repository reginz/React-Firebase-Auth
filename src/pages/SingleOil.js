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
  const [id, setId] = useState();

  useEffect(() => {
    const oilCreds = async () => {
      const oilData = await db
        .collection("Oils")
        .where("oil_name", "==", currentOil)
        .get();
      setOil(
        oilData.docs.map((doc) => {
          return doc.data();
        })
      );
      setId(
        oilData.docs.map((doc) => {
          return doc.id;
        })
      )
    };
    oilCreds();
  }, []);
  async function handleSave() {
    oil &&
      oil.map((oil_info) => {
        const setSaved = db
          .collection("Users")
          .doc(currentUser.uid)
          .collection("saved")
          .doc(id[0])
          .set({
            oil_name: oil_info.oil_name,
            oil_props: oil_info.oil_props,
            oil_components: oil_info.oil_components,
            oil_family: oil_info.oil_family,
            oil_origin: oil_info.oil_origin,
            oil_aroma: oil_info.oil_aroma,
            oil_color: oil_info.oil_color,
          });
        return setSaved;
      });
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
                        {oil_info.oil_name}{" "}
                        <span>
                          <button onClick={handleSave}>save</button>
                        </span>
                      </h1>

                      <div className="w-25 m-auto">
                        <hr className="orange-hr"></hr>
                      </div>
                    </div>

                    <InfoCard
                      family={oil_info.oil_family}
                      origin={oil_info.oil_origin}
                      aroma={oil_info.oil_aroma}
                    />
                    <div className="d-flex pt-5">
                      <PropsCard properities={oil_info.oil_props} />

                      <ComponentsCard properities={oil_info.oil_components} />
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
