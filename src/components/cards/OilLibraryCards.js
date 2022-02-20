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