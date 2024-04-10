import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Menu(){
    return (
        <ListGroup>
            <ListGroupItem tag="a" href="/home" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/doctors" action>
                Doctors
            </ListGroupItem>
            <ListGroupItem tag="a" href="/patients" action>
                Patients
            </ListGroupItem>
        </ListGroup>
    )
}