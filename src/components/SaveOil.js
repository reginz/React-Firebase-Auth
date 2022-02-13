import React from 'react';
import 'firebase/firestore'
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext';
const db = app.firestore()

function SaveOil(props) {
    const currentUser = useAuth()

    async function saveOil(){
        try{
            const oilPathRef = await db.collection("SavedItems").document(currentUser.uid).get();
            if(oilPathRef.exists){
                return <div>Already saved</div>
            }else{
                let name = props.oil_name
                oilPathRef.set({
                    name: [props.oil_id]
                })
                console.log("Oil ad")
            }
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