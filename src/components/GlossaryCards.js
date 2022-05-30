import React, { useEffect, useState } from "react";
import { useRef } from "react";
import app from "../firebase";
import GlossaryCard from "./cards/GlossaryCard";

function GlossaryCards() {
  var db = app.firestore();
  const [glossary, setGlossary] = useState();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const inputRef = useRef("");

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const clearAll = () => {
    setFilter("");
    setSearch("");
    inputRef.current.value = "";
  };

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
        });
    };
    getData();
  }, []);

  return (
    <div className="page-container">
      <h1>Dictionary</h1>

      <input
        ref={inputRef}
        className="searchbar mb-4"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul
        style={{ padding: "0" }}
        className="d-flex mb-3 justify-content-between"
      >
        {alphabet.map((letter) => {
          return (
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              className="btn-link"
              onClick={() => setFilter(letter)}
            >
              {letter}
            </button>
          );
        })}
        <button
          style={{
            border: "none",
            textDecoration: "underline",
            backgroundColor: "transparent",
          }}
          className="btn-link"
          onClick={clearAll}
        >
          Clear All
        </button>
      </ul>
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
          .filter((comp) => {
            if (setFilter === "") {
              return comp;
            } else if (
              comp &&
              comp["name"].toLowerCase().startsWith(filter.toLowerCase(), 0)
            ) {
              return comp;
            }
            return null;
          })
          .map((comp) => {
            return (
              <div>
                <>
                  <GlossaryCard
                    isGlossary={true}
                    name={comp["name"]}
                    meaning={comp[" properties"]}
                  />
                  <hr className="orange-hr mb-5"></hr>
                </>
              </div>
            );
          })}
    </div>
  );
}

export default GlossaryCards;
