import React from "react";
import { useNavigate } from "react-router-dom";
import {goToLoginPage, goToSignUpPage} from '../../routes/navigate/index';
import style from "./HomePage.module.scss";
import homepageIMG from "../../assets/images/homepage/homepage-img.png"


function HomePage(){
    const navigate = useNavigate();

    return(
        <>
        <main className={style.homepage}>
            <section className={style.banner}>
                <div className={`${style.banner___welcomeContent} width_60`}>
                    <h3>Bem vindo ao r-Beauty</h3>
                    <h1>Domine sua Consultoria de Beleza</h1>
                    <p>Transforme seu negócio de consultoria em beleza com a plataforma completa para gerenciar suas vendas, controlar seu estoque e maximizar seus resultados. Acesse as ferramentas que você precisa para crescer com confiança, eficiência e sucesso. Com o r-Beauty, o poder está em suas mãos.</p>
                    <div className={`${style.banner___welcomeContent___btnArea} width_100 `}>
                        <button className={`btnSecondaryStyle`} onClick={()=> goToLoginPage(navigate)}>Login</button>
                        <button className={`btnTertiaryStyle`} onClick={()=> goToSignUpPage(navigate)}>Cadastre-se</button>
                    </div>
                </div>
                <div className={`${style.banner___imgArea} width_40`}>
                    <img src={homepageIMG} alt="Bem Vindo r-Beauty"/>
                </div>
            </section>
        </main>
        </>
    )
}

export default HomePage;