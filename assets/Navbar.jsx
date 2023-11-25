import React from "react";



const Navbar = (props) => {



 return(
  
        <div className="text-black bg-white font-PixelifySans text-2xl font-bold p-4 flex gap-4 justify-between">
            <h1>Avesta</h1>
            <div className="flex gap-12">
            <p>chances: {props.chances}</p>
            <p>score: {props.score}</p>
            </div>
        </div>
 )
}




export default Navbar;