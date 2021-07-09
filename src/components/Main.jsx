import React from 'react'
import video from "./Background_video.mp4"
import Homepage from './HomePage'
import Navitems from './Navitems'
import Hamburger from './Hamburger'


const poster_img = "https://images.unsplash.com/photo-1508995561846-e758be1cf510?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

function Main() {
    return (
        <div >
            <div>
                <video autoPlay muted loop poster={poster_img} id="background" >
                <source src={video} type="video/mp4" />
                </video>
            </div>

            <header>
                   <Navitems />
            </header>

            <div id="main">
                <Homepage/>
            </div>
            
            <Hamburger />  {/*hamburger for small screen*/ }
            
            <div className="d-flex justify-content-center" id="drop_button"> 
                <i className="fas fa-chevron-circle-down fa-3x text-primary bg-white rounded-circle " />
            </div>

        </div>
    )
}

export default Main
