import React,{useState} from 'react'

function Hamburger() {

    const [width, setwidth] = useState({width:""})

   function openNav(){
        setwidth({width:"300px"})
   }
   function closeNav(){
       setwidth({width:"0px"})
}


    return (
        <div className="d-lg-none ">
                <div id="mySidenav" className="sidenav" style={width}>
                    <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">portfolio</a>
                    <a href="#">pages</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
          <span  onClick={openNav}>&#9776;</span>


        </div>
    )
}

export default Hamburger
