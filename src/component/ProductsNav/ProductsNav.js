import React from 'react'
import "./ProductsNav.css";
import { Nav } from "react-bootstrap"

export default function ProductsNav() {
    return (
        <Nav className="justify-content-center" style={{paddingTop: "30px"}}>
            <Nav.Item>
            <Nav.Link href="/shop-all" className="product-nav-link" eventKey="all">Shop all</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/lifestyle" className="product-nav-link" eventKey="lifestyle">Lifestyle</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/personal" className="product-nav-link" eventKey="personal">Personal Care</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
