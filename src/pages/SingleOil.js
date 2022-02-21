import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import InfoCard from '../components/cards/InfoCard';
import app from '../firebase'
import 'firebase/firestore'
import PropsCard from '../components/cards/PropsCard';
import ComponentsCard from '../components/cards/ComponentsCard';
import SaveOil from '../components/SaveOil';
import Sidebar from '../components/cards/Sidebar';

const db = app.firestore();

function SingleOil() {

    const url = window.location.href;
    const currentOil = url.split("/oil-details/")[1].split("%20").join(" ");
    const [oil, setOil] = useState()

    useEffect(() => {
        const oilCreds = async () => {
          const oilData = await db
            .collection("Oils")
            .where("name", "==", currentOil)
            .get();
          setOil(
            oilData.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        oilCreds();
        
      }, [currentOil]);


    return (
      <div className='d-flex w-100 align-items-evenly'>
        <Sidebar />
        <div className='page-container'>   
        <div className='page-wrapper flex-column'> 
        <div className='h-100'>
                {oil && oil.map((oil_info)=>{
                    return (
                        <>
                            <h1>{oil_info.name}</h1>

                            <SaveOil 
                            oil_name={oil_info.name}
                            oil_id={oil_info.oil_id}/>

                            <InfoCard
                            family={oil_info.family}
                            origin={oil_info.origin}
                            aroma={oil_info.aroma}
                            />
                          <div className='d-flex'>
                            <PropsCard 
                            properities={oil_info.Properties}/>

                            <ComponentsCard 
                            properities={oil_info.components}/>
                          </div>
                        </>
                    )
                })}
        </div>
        </div>
        </div>
      </div>
    );
}

export default SingleOil;