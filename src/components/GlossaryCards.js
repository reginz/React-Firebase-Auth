import React, { useEffect, useState } from "react";
import app from "../firebase";
import GlossaryCard from "./cards/GlossaryCard";

function GlossaryCards(props) {
  var db = app.firestore();
  const [glossary, setGlossary] = useState();
  const [id, setID] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      db.collection("Glossary")
        .get()
        .then((querySnapshot) => {
          // doc.data() is never undefined for query doc snapshots
          setGlossary(
            querySnapshot.docs.map((doc) => {
              var data = doc.data();
              return data;
            })
          );
          setID(
            querySnapshot.docs.map((doc) => {
              return doc.id;
            })
          );
        });
    };
    getData();
  }, []);

  return (
    <div className="page-container">
      <h1>Glossary</h1>

      <input
        className="searchbar mb-4"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {glossary &&
        glossary
          .filter((comp) => {
            if (setSearch === "") {
              return comp;
            } else if (
              (comp &&
                comp[" properties"]
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (comp &&
                comp["name"].toLowerCase().includes(search.toLowerCase()))
            ) {
              return comp;
            }
            return null;
          })
          .map((comp) => {
            return (
              <div>
                <GlossaryCard
                  name={comp["name"]}
                  meaning={comp[" properties"]}
                />
                <hr className="orange-hr mb-5"></hr>
              </div>
            );
          })}
    </div>
  );
}

export default GlossaryCards;
