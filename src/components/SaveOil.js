import React from 'react';
import 'firebase/firestore'
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext';
import firebase from 'firebase';

// const db = app.firestore()

function SaveOil(props) {
    // const {currentUser} = useAuth()

    // async function saveOil(){
   
    // }
    return (
        <div>
            <button>Save oil</button>
        </div>
    );
}

export default SaveOil;