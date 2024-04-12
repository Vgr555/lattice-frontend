import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import axios from 'axios'

export default function Doctors(){

    const [doctors, setDoctors] = useState([]);
    
    const fetchDocsFromDB = () => {
      axios.get('http://localhost:9090/doctor/doctors')
            .then(
              (response) => {
                setDoctors(response.data);
                console.log(response);
              },
              (error) => {
                console.log('error : ' , error);
              } 
            );
    };

    useEffect(
      () => {
        fetchDocsFromDB();
      }, []);

    return (
        <>
            {doctors.length > 0 ? doctors.map((doc) => <Doctor key={doc.id} doctor={doc} />) : "None"}
        </>   
    )
}