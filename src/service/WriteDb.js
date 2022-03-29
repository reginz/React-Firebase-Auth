import React from "react";
import app from "../firebase";

const db = app.firestore();

function WriteDb() {
  async function infoHandler() {
    await db
      .collection("Oils")
      .doc()
      .set({
        oil_name: "Rose hip oil",
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
      });
  }
  return <button onClick={infoHandler}>click</button>;
}

export default WriteDb;
