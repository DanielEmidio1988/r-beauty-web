import React from "react";
import SocialNetworks from "../social-networks";
import style from "./Footer.module.scss";

interface IMenu{
    item: string;
    tag: string;
}

function Footer(){
    const menus: IMenu[] = [
        {
            item: "Sobre",
            tag: "#about"
        },
        {
            item: "Nossos Recursos",
            tag: "#ourresources"
        },
        {
            item: "Duvidas Frequentes",
            tag: "#faq"
        }
    ]

    return(
        <footer className={style.footer}>
            <div className={style.footer___infoarea}>
                <div className={style.footer___infoarea___about}>
                    <h5 className={`${style.title_area}`}>Sobre o r-Beauty</h5>
                    <p>O r-Beauty é sua solução completa para uma gestão de consultoria de beleza mais eficiente e prática. Simplificamos suas tarefas diárias para que você possa focar no que realmente importa: conquistar clientes e aumentar suas vendas.</p>
                </div>
                <div className={style.footer___infoarea___quickmenu}>
                    <h5 className={`${style.title_area}`}>Intitucional</h5> 
                    <ul className={`${style.footer___infoarea___quickmenu___nav}`}>
                        {menus && menus.map((menu, index)=>{
                            return(
                                <li key={index}><a href={menu.tag}>{menu.item}</a></li>
                            )
                        })}
                    </ul>

                </div>
                <div className={style.footer___infoarea___socialnetwork}>
                    <h5 className={`${style.title_area}`}>Contato</h5> 
                    <SocialNetworks/>
                </div>
            </div>
            <div className={style.footer___credits}>
                <p className={style.footer___credits___content}>r-Beauty foi desenvolvido por <a href="https://github.com/DanielEmidio1988" target="_blank">Daniel Emidio</a></p>
            </div>         
        </footer>
    )
}

export default Footer;