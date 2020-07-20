import React from 'react';
import { useHistory } from "react-router-dom";


const Welcome =()=>{
//    const handleClick =()=>{

//    }

   let history = useHistory();
   function dashboardPage() {
    history.push("/userdashboard");
    };
 return(
     <div>
        <h1> Welcome to e-reports</h1>
        <button onClick={dashboardPage}> YOU MAY PROCEED</button>
     </div>
 )


}



export default Welcome;