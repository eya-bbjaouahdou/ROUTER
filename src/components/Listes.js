import React from "react";
import { NavLink , Outlet } from "react-router-dom";

function Listes() {
    return(
        <div>
            tout les listes de contacts ce trouve ici
            <nav>
                <NavLink to="PremierListe">liste 1</NavLink>
                <hr/>
                <NavLink to="deuxiémeListe">liste 2</NavLink>

            </nav>
            <Outlet/>
         </div>
    )
    
}
export default Listes;