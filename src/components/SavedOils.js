import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";

function SavedOils(props) {
  const { currentUser } = useAuth();
  const db = app.firestore();
  const [savedOils, setSavedOils] = useState();

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
  });
  return (
    <div>
      {savedOils &&
        savedOils.map((oil) => {
          return <p className="text-center">{oil.oil_name}</p>;
        })}
    </div>
  );
}

export default SavedOils;
