import React from "react";
import {BsLinkedin, BsGithub, BsFillEnvelopeFill} from "react-icons/bs";
import style from "./SocialNetwork.module.scss";

interface IMenu{
    icon: JSX.Element;
    url: string;
}

function SocialNetworks(){
    const menus: IMenu[] = [
        {
            icon: <BsLinkedin/>,
            url: "https://www.linkedin.com/in/danielemidio1988/"
        },
        {
            icon: <BsGithub/>,
            url: "https://github.com/DanielEmidio1988"
        },
        {
            icon: <BsFillEnvelopeFill/>,
            url: "mailto:emidio.daniel@hotmail.com"
        }
    ]
    return(
        <div className={style.socialnetwork}>
            {menus && menus.map((menu)=>{
                return(
                    <a href={menu.url} target="_blank" className={style.socialnetwork___item}>
                        {menu.icon}
                    </a>
                )
            })}
        </div>
    )
}

export default SocialNetworks