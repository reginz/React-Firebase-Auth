import React, { useEffect, useState } from "react";
import "firebase/firestore";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase";
const db = app.firestore();

function SaveOil(props) {
  const { currentUser } = useAuth();
  const [savedUsers, setSavedUsers] = useState([]);

  useEffect(() => {
      const getSaved = async () =>{
        const oil = await db
        .collection("Oils")
        .where("name", "==", props.oil_name)
        .get();
      setSavedUsers(
        oil.docs.map((doc) => {
          return doc.data().saves;
        })
      );
      }
      getSaved();
  },[]);

  async function saveOil() {
    var setArray = []
    setArray = savedUsers
    setArray.push([currentUser.uid])
    console.log(setArray)

    await db
      .collection("Oils")
      .doc(props.oil_name)
      .update({
        saves: setArray,
      });
  }
  return (
    <div>
      <button onClick={saveOil}>Save oil</button>
    </div>
  );
}

export default SaveOil;
