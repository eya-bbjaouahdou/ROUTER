import React from "react";
import {useNavigate} from 'react-router-dom';
function Home() {
    const route = useNavigate()
    return(
        <div>
          Bienvenue sur la page principale

          <button onClick={()=>route("contact")}>Add Users</button>
        </div>
    )
    
}
export default Home;