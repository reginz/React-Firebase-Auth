import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import OilCard from '../components/cards/OilCard';
import app from '../firebase'
import 'firebase/firestore'

const db = app.firestore()
function OilLibrary() {
    const [oilData, setOilData] = useState()

    useEffect(() => {
        const cardData = async () => {
          const card = await db
            .collection("Oils")
            .get();
          setOilData(
            card.docs.map((doc) => {
              return  doc.data();
            })
          );
        };
        cardData();
      }, []);
    return (
        <Container className='d-flex' >
            {oilData && oilData.map((data)=>{
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
            
        </Container>
    );
}

export default OilLibrary;