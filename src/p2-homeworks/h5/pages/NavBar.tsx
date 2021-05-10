import React, {useState} from "react";
import s from "./NavBar.module.css"
import {PATH} from "../Routes";
import { NavLink } from "react-router-dom";


function NavBar() {

    const [openNavBAr, setOpenNavBAr] = useState<boolean>(false)

    let classForNavbar = openNavBAr ? `${s.navBar} ${s.open}` : `${s.navBar}`


    return (
        <div onBlur={() => setOpenNavBAr(false)} className={classForNavbar}>
            <button className={s.button} onClick={() => setOpenNavBAr(!openNavBAr)}>
                <span></span>
            </button>
            {/*<button className={s.activeButton}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*</button>*/}
            <div className={s.links}>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                {/*<a href={''}>Midle</a>*/}
            </div>
        </div>

    )

}

export default NavBar;
