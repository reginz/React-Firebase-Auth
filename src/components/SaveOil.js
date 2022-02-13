import React from 'react';
import 'firebase/firestore'
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext';
const db = app.firestore()

function SaveOil(props) {
    const currentUser = useAuth()

    function saveOil(){
        try{
            const oilPathRef = db.collection("SavedItems").document(currentUser.uid).get();
            
        }catch(er){

        }
    }
    return (
        <div>
            <button onClick={saveOil}>Save oil</button>
        </div>
    );
}

export default SaveOil;