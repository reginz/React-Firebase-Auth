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
  const currentOil = url.split("/oil-details/")[1].split("%20").join(" ");
  const [oil, setOil] = useState([]);
  const [id, setId] = useState();
  const [isSaved, setIsSaved] = useState(false);

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
      );
    };
    oilCreds();
  }, []);
  //TODO: CHANGE
  async function handleSave() {
    oil &&
      oil.map((oil_info) => {
        var einces = "";
        {
          oil_info.oil_einecs ? (einces = oil_info.oil_einecs) : (einces = "");
        }
        const setSaved = db
          .collection("Users")
          .doc(currentUser.uid)
          .collection("saved")
          .doc(id[0])
          .set({
            oil_name: oil_info.oil_name,
            oil_plant: oil_info.oil_plant,
            oil_obtained: oil_info.oil_obtained,
            oil_obtaining_methods: oil_info.oil_obtaining_methods,
            oil_org_props: oil_info.oil_org_props,
            oil_phys_chem_props: oil_info.oil_phys_chem_props,
            oil_limit_val: oil_info.oil_limit_val,
            oil_components: oil_info.oil_components,
            oil_application_method: oil_info.oil_application_method,
            oil_is_eptf: oil_info.oil_is_eptf,
            oil_interactions: oil_info.oil_interactions,
            oil_contraindications: oil_info.oil_contraindications,
            oil_warn: oil_info.oil_warn,
            oil_toxicity: oil_info.oil_toxicity,
            oil_pregnancy: oil_info.oil_pregnancy,
            oil_storage: oil_info.oil_storage,
            oil_cas: oil_info.oil_cas,
            oil_einecs: einces,
            oil_literature: oil_info.oil_literature,
            oil_color: oil_info.oil_color,
          });

        setIsSaved(true);
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
                      <h1 className="oil-title text-center pb-0  pt-5 ">
                        {oil_info.oil_name}{" "}
                        <span>
                          <button className="save-btn" onClick={handleSave}>
                            {isSaved ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-bookmark-check-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-bookmark"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                              </svg>
                            )}
                          </button>
                        </span>
                      </h1>

                      <div className="w-25 m-auto">
                        <hr className="orange-hr"></hr>
                      </div>
                    </div>

                    <InfoCard
                      family={oil_info.oil_plant}
                      origin={oil_info.oil_obtained}
                      aroma={oil_info.oil_obtaining_methods}
                    />
                    <div className="d-flex pt-5">
                      <PropsCard
                        properities={oil_info.oil_application_method}
                      />

                      <ComponentsCard properities={oil_info.oil_components} />
                    </div>
                    <div className="info-card mt-5 ">
                      {oil_info.oil_warn.map((a) => {
                        return (
                          <ul className="emoji">
                            <li>{a}</li>
                          </ul>
                        );
                      })}
                    </div>
                    <div
                      style={{ gap: "0", gridGap: "0" }}
                      className="info-card flex-column mt-5"
                    >
                      <div>
                        <p>CAUTION</p>
                        <hr className="orange-hr"></hr>
                      </div>

                      <div>
                        🧪 {oil_info.oil_interactions}
                        <br></br>
                        🚫 {oil_info.oil_contraindications}
                        <br></br>
                        ☢️ {oil_info.oil_toxicity} <br></br>
                        🤰 {oil_info.oil_pregnancy} <br></br>
                        📦 {oil_info.oil_storage}
                      </div>
                    </div>

                    <div
                      className="info-card mt-5 flex-column"
                      style={{ gap: "0", gridGap: "0" }}
                    >
                      <div>
                      <p>REFERANCE</p>
                      <hr className="orange-hr"></hr>
                      </div>
                     
                      {oil_info.oil_literature.map((a) => {
                        return <div>📚 {a}</div>;
                      })}
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
