import React from "react";
import { Card, CardBody } from 'reactstrap';


export default function Header(){
    return(
        <Card>
            <CardBody className="my-2 bg-warning">
                <h1 className="text-center my-2">Welcome!</h1>
            </CardBody>
        </Card>
        
    ) 
}