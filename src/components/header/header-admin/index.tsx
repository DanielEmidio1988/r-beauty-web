import React, {useState} from "react";
import {BsEnvelope, BsGear} from "react-icons/bs";
import style from "./HeaderAdmin.module.scss";


function HeaderAdmin(){
    return(
        <header className={`${style.headeradmin}`}>
            <nav className={`${style.headeradmin___navarea} width_100`}>
                <ul className={`${style.headeradmin___navarea___listMenu} width_100`}>
                    <li className={style.headeradmin___navarea___listMenu___item}><BsGear/></li>
                    <li className={style.headeradmin___navarea___listMenu___item}><BsEnvelope/></li>
                    <li className={style.headeradmin___navarea___listMenu___item}>
                        <span className={style.headeradmin___navarea___listMenu___item___userName}>Daniel Emidio</span>
                        <span className={style.headeradmin___navarea___listMenu___item___emailUser}>daniel@gmail.com</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderAdmin;