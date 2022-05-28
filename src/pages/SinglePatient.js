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
import "../styles/OilCard.css";
const db = app.firestore();

function SingleOil() {
  const { currentUser } = useAuth();
  const url = window.location.href;
  const currentOil = url.split("/visits/")[1].split("%20").join(" ");
  const [oil, setOil] = useState([]);
  const [id, setId] = useState();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const oilCreds = async () => {
      const oilData = await db
        .collection("Visits")
        .where("name", "==", currentOil)
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
      );
    };
    oilCreds();
  }, []);
  //TODO: CHANGE
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
                      <h1 className="oil-title text-center pb-0  pt-5 ">
                        {oil_info.name}{" "}
                      </h1>

                      <div className="w-25 m-auto">
                        <hr className="orange-hr"></hr>
                      </div>
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
