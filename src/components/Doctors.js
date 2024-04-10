import React, { useState } from "react";
import Doctor from "./Doctor";

export default function Doctors(){
    const doctorData1 = {
        id:1,
        name:"Andrew",
        city:"Delhi",
        email:"andrew@gmail.com", 
        phoneNumber:"9876543210", 
        speciality:"Orthopedic"
      };
    const doctorData2 = {
        id:2,
        name:"Jessy",
        city:"Delhi",
        email:"jessy@gmail.com", 
        phoneNumber:"9876543210", 
        speciality:"Orthopedic"
      };
    const [doctors, setDoctors] = useState([doctorData1, doctorData2]);
    return (
        <>
            {doctors.length > 0 ? doctors.map((doc) => <Doctor doctor={doc} />) : "None"}
        </>
        
    )
}