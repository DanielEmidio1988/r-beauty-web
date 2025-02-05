import React from 'react';
import { goToLoginPage, goToSignUpPage } from '../../routes/navigate/index';
import CardIconAndContent from "../../components/cards/cardiconandcontent/CardIconAndContent";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import style from "./HomePage.module.scss";
import homepageIMG from "../../assets/images/homepage/homepage-img.png"
import { useHomePage } from './useHomePage';


function HomePage() {
    const logic = useHomePage();

    return (
        <>
            <main className={style.homepage}>
                <section className={`${style.banner}`}>
                    <div className={`${style.banner___welcomeContent} width_60`}>
                        <h3>Bem vindo ao r-Beauty</h3>
                        <h1>Domine sua Consultoria de Beleza</h1>
                        <p>Transforme seu negócio de consultoria em beleza com a plataforma completa para gerenciar suas vendas, controlar seu estoque e maximizar seus resultados. Acesse as ferramentas que você precisa para crescer com confiança, eficiência e sucesso. Com o r-Beauty, o poder está em suas mãos.</p>
                        <div className={`${style.banner___welcomeContent___btnArea} width_100 `}>
                            <button className={`btnSecondaryStyle`} onClick={() => goToLoginPage(logic.navigate)}>Login</button>
                            <button className={`btnTertiaryStyle`} onClick={() => goToSignUpPage(logic.navigate)}>Cadastre-se</button>
                        </div>
                    </div>
                    <div className={`${style.banner___imgArea} width_40`}>
                        <img src={homepageIMG} alt="Bem Vindo r-Beauty" />
                    </div>
                </section>
                <section className={`${style.intro} section_area`}>
                    <div className={`${style.intro___title} title_area inner_padding_md`}>
                        <h3>Sobre o <span>r-Beauty</span></h3>
                        <h6>A ferramenta ideal para consultores de beleza</h6>
                    </div>
                    <div className={`${style.intro___content} content_area inner_padding_sm`}>
                        <div className={`just-content-area`}>
                            <p>
                                O <strong>r-Beauty</strong> é uma plataforma inovadora, desenvolvida especialmente para consultores de beleza
                                que buscam elevar seu trabalho ao próximo nível. Com uma interface intuitiva e funcionalidades completas,
                                você pode gerenciar seu estoque, acompanhar suas vendas e promover suas promoções de forma eficiente.
                            </p>
                            <p>
                                Nosso objetivo é simplificar sua rotina, oferecendo as ferramentas necessárias para aumentar sua produtividade
                                e fortalecer suas vendas. No <strong>r-Beauty</strong>, você encontra soluções personalizadas, pensadas para facilitar
                                seu crescimento no mundo da beleza.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={`${style.portfolio} section_area`}>
                    <div className={`${style.intro___title} title_area inner_padding_md`}>
                        <h3><span>Recursos Poderosos</span> do r-Beauty</h3>
                        <h6>Domine todos os aspectos da sua consultoria com essas funcionalidades</h6>
                    </div>
                    <div className={`${style.intro___wrapper} content_area inner_padding_sm`}>
                            {logic.services && logic.services.map((service, index) => {
                                return(
                                    <>
                                        <CardIconAndContent 
                                            key={index}
                                            icon={service.icon}
                                            title={service.title}
                                            content={service.content}
                                        />
                                    </>
                                )
                            })}
                    </div>
                </section>
                <section className={`${style.faq} section_area inner_padding_lg`}>
                    <div className={`${style.faq___title} title_area inner_padding_sm`}>
                        <h3>Perguntas <span>Frequentes</span></h3>
                        <h6>Aqui estão algumas das principais dúvidas sobre nossa plataforma.</h6>
                    </div>
                    <div className={`${style.faq___content} content_area inner_padding_sm`}>
                        <FAQ
                            faqData={logic.faqData} 
                        />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;