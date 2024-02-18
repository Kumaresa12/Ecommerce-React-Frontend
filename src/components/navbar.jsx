import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import "./navbar.css"

export const Navbar = () => {
    return <div className="navbar">
        <div className="links">
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <ShoppingCart/>
            </Link>
        </div>
    </div>
}