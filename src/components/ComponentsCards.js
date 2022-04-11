import React, { useEffect, useState } from "react";
import app from "../firebase";
import GlossaryCard from "./cards/GlossaryCard";

function ComponentsCards(props) {
  var db = app.firestore();
  const [components, setComponents] = useState();
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState();
  const [str, setStr] = useState();

  useEffect(() => {
    const getData = async () => {
      db.collection("Components")
        .get()
        .then((querySnapshot) => {
          // doc.data() is never undefined for query doc snapshots
          setComponents(
            querySnapshot.docs.map((doc) => {
              var data = doc.data();
              return data;
            })
          );
        });
    };
    getData();
  }, []);

  return (
    <div className="page-container">
      <h1>Components</h1>

      <input
        className="searchbar mb-4"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {components &&
        components
          .filter((comp) => {
            if (setSearch === "") {
              return comp;
            } else if (
              comp.name &&
              comp.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return comp;
            }
            return null;
          })
          .map((comp) => {

            return (
              <div>
                <GlossaryCard
                  isGlossary={false}
                  info={info}
                  name={comp["name"]}
                  meaning={comp.properties}
                />
                <hr className="orange-hr mb-5"></hr>
              </div>
            );
          })}
    </div>
  );
}

export default ComponentsCards;
