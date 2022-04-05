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
        const setSaved = db
          .collection("Users")
          .doc(currentUser.uid)
          .collection("saved")
          .doc(id[0])
          .set({
            oil_name: oil_info.oil_name,
            oil_plant: "Rose hip",
            oil_obtained: "Seeds",
            oil_obtaining_methods: "Cold pressed",
            oil_org_props: [
              "Orange-red color",
              "Drying and flowing",
              "With characteristic odor",
              "It may become cloudy at low temperature.",
            ],
            oil_phys_chem_props: [
              { name: "Density", value: "0,911-0,950" },
              { name: "Refractive index", value: "n20/D 1,467-1,490" },
              { name: "Optical conversion", value: "not available" },
              { name: "Fp", value: "61" },
            ],
            oil_limit_val:
              "Pesticide and herbicide residues should be within the limit values.",
            oil_components: [
              { name: "Linoleic acid", value: "48,64-54,05" },
              { name: "α - Linoleic acid", value: "16,42-20,65" },
              { name: "Oleic acid", value: "14,71-22,14" },
              { name: "Palmitoleic acid", value: "0,05" },
              { name: "Palmitic acid", value: "3,17-5,26" },
              { name: "Lautic acid", value: "4,80" },
              { name: "Alpha tocopherol", value: "2,38-4,88" },
              { name: "Gamma tocopherol", value: "517-1161" },
              { name: "Delta tocopherol", value: "4,56-7,23" },
            ],
            oil_application_method: [
              "Daily, medicinal lavender essential oils are mixed with some jojoba oil and rosehip seed oil for use as an anti-aging as well as moisturizing feature.",
              "It is applied externally by massaging the face.",
              "It is used as a supplement in the treatment of skin diseases such as reducing scars, spots, acne, psoriasis, rosacea, dry and wet eczema.",
              "On the skin affected by sun damage and irritation, steam bath and massage are applied in order to reduce pain and relax the body.",
              "It is applied externally to the skin at a rate of at least 5-10%.",
            ],
            oil_is_eptf: false,
            oil_interactions: [
              "No interaction is known when used externally and at recommended doses.",
            ],
            oil_contraindications: [
              "People who have an allergic reaction to its ingredients should not use it.",
            ],
            oil_warn: [
              "Caution should be exercised when using on extremely sensitive skin.",
              "It is not recommended to use it continuously for 3 weeks in those receiving radiotherapy treatment, and for more than 2 months in other cases.",
              "It should be kept away from contact with eyes. In case of contact with eyes, rinse with plenty of water for at least 15 minutes and seek medical advice.",
              "It should be kept out of reach of children and in its package.",
            ],
            oil_toxicity: ["It has no known toxicity."],
            oil_pregnancy: [
              "It is recommended not to be used in the first 4 months of pregnancy due to its hormone-regulating effect.",
            ],
            oil_storage: [
              "It can be stored for 6-9 months in fully filled, tightly closed packages, in an environment not exceeding 25 degrees Celsius.",
            ],
            oil_cas: "84961-57-9",
            oil_einecs: "284-646-0",
            oil_iupac: "Punica Granatum Seed Oil",
            oil_literature: [
              "Khoddami et al., Physico‐chemical properties and fatty acid profile of seed oils from pomegranate (Punica granatum L.) extracted by cold pressing, Eur. J. Lipid Sci. Technol. 116, 2014.",
              "Gumus et al., Cold pressed pomegranate (Punica granatum) seed oil. Cold Pressed Oils, 597–609, 2020.",
              "Boroushaki et al., Pomegranate seed oil: A comprehensive review on its therapeutic effects, International Journal of Pharmaceutical Sciences and Research 7(2):430-442, 2016.",
              "Meerts et al., Toxicological evaluation of pomegranate seed oil, Food and Chemical Toxicology, 47 (6), 1085-1092, 2009.",
            ],
            oil_color:"green"
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
