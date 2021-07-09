import React from 'react'
import { Link } from 'react-router-dom'

function Navitems() {
    return (
        <nav id="navbar">
            <div id="logo" >SCENIC</div>
            <div className="d-none d-lg-flex" id="navitem">  
                <div><a href="/">home</a></div>
                <div><a href="/about">About</a></div>
                <div><a href="/portfolio">Portfolio</a></div>
                <div><a href="/pages">Pages</a></div>
                <div><a href="/blogs">Blog</a></div>
                <div><a href="/Contact">Contact</a></div>
            </div>
        </nav>
    )
}



export default Navitems
