import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import OilCard from './OilCard';
import app from '../../firebase'
import 'firebase/firestore'
import '../../styles/Inputs.css'

const db = app.firestore()
function OilLibraryCards() {

    const [oilData, setOilData] = useState([])
    const [search, setSearch] = useState("");
    
    //Getting oil details from firebase db
    useEffect(() => {
        const cardData = async () => {
          const card = await db
            .collection("Oils")
            .get();
          setOilData(
            card.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        cardData();
      }, []);

    async function filterEsstential(){
      const checkedData = await db
            .collection("Oils")
            .where("type" , "==" , "essential")
            .get();
      const intialData = await db
      .collection("Oils")
      .get();
      const checkbox = document.getElementById("essential-oils").checked
      if(checkbox == true){
        setOilData(
          checkedData.docs.map((doc)=>{
            return doc.data()
        }))
      }else{
        setOilData(
          intialData.docs.map((doc) => {
            return doc.data();
          })
        );
      }
    }

    return (
      <>
       <div className='page-container'>   
        <div className='page-wrapper'> 
        <div className='w-100'>
          <h2>Filter Oils</h2>
           <input className='searchbar mb-3'
              type="text" 
              placeholder=" Search Oils" 
              onChange={(event) => {
                setSearch(event.target.value);
              }}/>
              <input id='essential-oils' type='checkbox'
              onChange={filterEsstential} />
              <label for="essential-oils" 
              className='filter-item pl-2 align-items-center'>Essantial Oils</label>
          </div>
          
          <div className='w-100'>
          <h2 className='mb-3'>Oil Library</h2>
            <div className='row'>

              {oilData && oilData.filter((data)=>{
                    if (setSearch === ("")){
                      return data
                    }
                    else if (data.name.toLowerCase().includes(search.toLowerCase())){                    
                      return data
                    }
                    return null
              })
             // Map cards
              .map((data)=>{
                 var oilName = data && data.name
                 var family = data && data.family
                 var color = data && data.color
                  return(
                      <div className='col-md'>
                        <OilCard 
                        color={color}
                        route={oilName}
                        family={family}
                        name={oilName.toUpperCase()} />
                      </div>
                  )
              })}
              </div>
              </div>
              </div>
            
        </div>
        </>
    );
}

export default OilLibraryCards;