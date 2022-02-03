import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import InfoCard from '../components/cards/InfoCard';
import app from '../firebase'
import 'firebase/firestore'
import PropsCard from '../components/cards/PropsCard';

const db = app.firestore()
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
        <div className='h-100'>
            <Container>
                {oil && oil.map((oil_info)=>{
                    
                    return (
                        <>
                            {oil_info.name}
                            <InfoCard
                            family={oil_info.family}
                            origin={oil_info.origin}
                            aroma={oil_info.aroma}
                            />
                            <PropsCard />
                        </>
                    )
                })}
            </Container>
        </div>
    );
}

export default SingleOil;