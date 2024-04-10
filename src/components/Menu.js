import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Menu(){
    return (
        <ListGroup>
            <ListGroupItem tag={Link} to="/home" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/doctors" action>
                Doctors
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/patients" action>
                Patients
            </ListGroupItem>
        </ListGroup>
    )
}