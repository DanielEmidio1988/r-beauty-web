import React from "react";
import { useNavigate } from "react-router-dom";
import {goToLoginPage, goToSignUpPage} from '../../routes/navigate/index'


function HomePage(){
    const navigate = useNavigate();

    return(
        <>
        <main>
            <section>
                <div>
                    <h3>Bem vindo ao r-Beauty</h3>
                    <h1>Domine sua Consultoria de Beleza</h1>
                    <p>Transforme seu negócio de consultoria em beleza com a plataforma completa para gerenciar suas vendas, controlar seu estoque e maximizar seus resultados. Acesse as ferramentas que você precisa para crescer com confiança, eficiência e sucesso. Com o r-Beauty, o poder está em suas mãos.</p>
                    <div>
                        <button onClick={()=> goToLoginPage(navigate)}>Login</button>
                        <button onClick={()=> goToSignUpPage(navigate)}>Cadastre-se</button>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </main>
        </>
    )
}

export default HomePage;