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
       <div className='page-container' style={{ 
            position: "relative",
                        padding: "2em",
                        width: "100%",
                       }}>   
        <div className='page-wrapper'
        style={{maxWidth:"900px",  display: "flex",
                        justifyContent: "center",
                        alignItems:"center",
                        flexDirection:"row",
                        flexWrap:"wrap",
                        gap: "3em",
                         margin:"0 auto"}}> 
          <h2>Filter Oils</h2>
           <input className='searchbar mb-3'
              type="text" 
              placeholder=" Search Oils" 
              onChange={(event) => {
                setSearch(event.target.value);
              }}/>
          <h2>Oil Library</h2>
            <div className='d-flex'>

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
                 
                  return(
                      <div>
                      <OilCard 
                      route={oilName}
                      family={family}
                      name={oilName.toUpperCase()} />
                      </div>
                  )
              })}
              </div>
              </div>
            
        </div>
        </>
    );
}

export default OilLibraryCards;