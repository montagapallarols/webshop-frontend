import React from 'react'
import { Nav } from "react-bootstrap"
import "./ProductNav.css";

export default function index() {
    return (
        <Nav className="justify-content-center" style={{paddingTop: "30px"}}>
            <Nav.Item>
            <Nav.Link className="product-nav-link" href="/home">Shop all</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="product-nav-link" eventKey="link-1">Lifestyle</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="product-nav-link" eventKey="link-2">Personal Care</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
