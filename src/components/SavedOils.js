import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";
import OilCard from "./cards/OilCard";

function SavedOils(props) {
  const { currentUser } = useAuth();
  const db = app.firestore();
  const [savedOils, setSavedOils] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      db.collection("Users")
        .doc(currentUser.uid)
        .collection("saved")
        .get()
        .then((querySnapshot) => {
          // doc.data() is never undefined for query doc snapshots
          setSavedOils(
            querySnapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    };
    getData();
  },[]);
  return (
    <div className="d-flex flex-column w-100 p-5">
      <input
        className="searchbar mb-4"
        type="text"
        placeholder="Search Saved Oils"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <h1 className="mb-4">Saved Oils</h1>
      <div className="saved-oils__container">
        {savedOils &&
          savedOils
            .filter((oil) => {
              if (setSearch === "") {
                return oil;
              } else if (
                oil &&
                oil.oil_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return oil;
              }
              return null;
            })
            .map((oil) => {
              var oilName = oil && oil.oil_name;
              var family = oil && oil.oil_family;
              var color = oil && oil.oil_color;
              return (
                <div>
                  <OilCard
                    color={color}
                    route={oilName}
                    family={family}
                    name={oilName.toUpperCase()}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default SavedOils;
