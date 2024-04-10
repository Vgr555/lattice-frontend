import React from "react";
import { Card, CardBody } from 'reactstrap'

// export default function Doctor(props){
//     return (
//         <Card>
//             <CardBody>
//                 <h4>id : {props.id}</h4>
//                 <h4>name : {props.name}</h4>
//                 <h4>city : {props.city}</h4>
//                 <h4>email : {props.email}</h4>
//                 <h4>phoneNumber : {props.phoneNumber}</h4>
//                 <h4>speciality : {props.speciality}</h4>
//             </CardBody>
//         </Card>
//     )
// }

export default function Doctor({doctor}){
    return (
        <>
            <Card>
                <ul>
                    {Object.keys(doctor).map(
                        (key) => (
                            <li key={key}>
                                {key} : {doctor[key]}
                            </li>
                        )
                    )}
                </ul>
            </Card>
        </>
    )
}