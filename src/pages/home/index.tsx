import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {BsBox2Fill, BsGraphUpArrow, BsTagFill, BsCreditCardFill, BsBarChartFill, BsFillPeopleFill} from "react-icons/bs";
import { goToLoginPage, goToSignUpPage } from '../../routes/navigate/index';
import CardIconAndContent from "../../components/cards/card-icon-and-content";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import style from "./HomePage.module.scss";
import homepageIMG from "../../assets/images/homepage/homepage-img.png"

interface IService{
    icon: JSX.Element;
    title: string;
    content: string;
}

export interface IFaq{
    title: string;
    content: string;
}

function HomePage() {
    const navigate = useNavigate();
    const services: IService[] = [
        {
            icon: <BsBox2Fill/>,
            title: "Gestão de Estoque",
            content: "Mantenha o controle total do seu estoque, garantindo disponibilidade de produtos e evitando rupturas"
        },
        {
            icon: <BsGraphUpArrow/>,
            title: "Controle de Fluxo de Vendas",
            content: "Acompanhe suas vendas em tempo real e tenha uma visão clara sobre o desempenho do seu negócio"
        },
        {
            icon: <BsTagFill/>,
            title: "Gestão de Promoções",
            content: "Crie, gerencie e monitore promoções para atrair mais clientes e aumentar suas vendas."
        },
        {
            icon: <BsCreditCardFill/>,
            title: "Acompanhamento de Vendas Parceladas",
            content: "Gerencie o parcelamento de vendas e acompanhe o recebimento de cada parcela com precisão."
        },
        {
            icon: <BsBarChartFill/>,
            title: "Relatórios Completos",
            content: "Obtenha relatórios detalhados que ajudam a entender o desempenho geral de suas vendas e estoque."
        },
        {
            icon: <BsFillPeopleFill/>,
            title: "Gestão de Clientes",
            content: "Organize informações de clientes e histórico de compras para melhorar o atendimento e fidelizar seu público."
        }
    ];
    const faqData: IFaq[] = [
        {
            title: "O que é o r-Beauty?",
            content: "O r-Beauty é uma plataforma projetada para consultores de beleza que desejam melhorar o gerenciamento de suas vendas, controle de estoque e operações gerais de seus negócios. Ele oferece ferramentas para otimizar processos e ajudar no crescimento e sucesso do negócio."
        },
        {
            title: "Qual o objetivo do r-Beauty?",
            content: "O objetivo do r-Beauty é fornecer uma solução eficiente e acessível para consultores de beleza gerenciarem seu estoque, vendas e clientes de forma integrada e intuitiva, economizando tempo e recursos."
        },
        {
            title: "Em qual estágio de desenvolvimento o r-Beauty se encontra? ",
            content: "Atualmente, o r-Beauty está em uma fase inicial de desenvolvimento, com funcionalidades básicas sendo implementadas e testadas. Futuras atualizações incluirão novas funcionalidades, melhorias de performance e otimizações da experiência do usuário."
        },
        {
            title: "O r-Beauty é escalável?",
            content: "Sim, o r-Beauty foi pensado para ser escalável e flexível, permitindo que novas funcionalidades e integrações sejam adicionadas conforme a necessidade do negócio ou do usuário cresce."
        },
        {
            title: "Qual tecnologia está sendo usada no desenvolvimento do r-Beauty?",
            content: "O r-Beauty foi desenvolvido utilizando tecnologias modernas, como React.js, TypeScript e SCSS para o front-end. Também faz uso de práticas ágeis, como Scrum, e controle de versionamento com Git."
        },
        {
            title: "Como posso colaborar ou contribuir para o desenvolvimento do r-Beauty?",
            content: "Se você está interessado em colaborar com o projeto, seja fornecendo feedback, desenvolvendo novas funcionalidades ou mesmo investindo, entre em contato através dos canais disponíveis. O projeto está aberto a parcerias e contribuições da comunidade de tecnologia."
        },
        {
            title: "O r-Beauty está aberto para testes de usuários?",
            content: "Sim, assim que o r-Beauty alcançar um estágio estável, haverá um período de beta testing aberto para usuários selecionados experimentarem a plataforma e fornecerem feedback para melhorias."
        },
        {
            title: "Por que o r-Beauty é uma solução relevante para o mercado de beleza?",
            content: "O r-Beauty aborda um segmento em crescimento, fornecendo ferramentas específicas para consultores de beleza, um mercado muitas vezes negligenciado por soluções tecnológicas maiores. Ele ajuda a simplificar processos e aumentar a eficiência para profissionais que desejam focar em seus negócios principais."
        }
    ];

    return (
        <>
            <main className={style.homepage}>
                <section className={`${style.banner}`}>
                    <div className={`${style.banner___welcomeContent} width_60`}>
                        <h3>Bem vindo ao r-Beauty</h3>
                        <h1>Domine sua Consultoria de Beleza</h1>
                        <p>Transforme seu negócio de consultoria em beleza com a plataforma completa para gerenciar suas vendas, controlar seu estoque e maximizar seus resultados. Acesse as ferramentas que você precisa para crescer com confiança, eficiência e sucesso. Com o r-Beauty, o poder está em suas mãos.</p>
                        <div className={`${style.banner___welcomeContent___btnArea} width_100 `}>
                            <button className={`btnSecondaryStyle`} onClick={() => goToLoginPage(navigate)}>Login</button>
                            <button className={`btnTertiaryStyle`} onClick={() => goToSignUpPage(navigate)}>Cadastre-se</button>
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
                            {services && services.map((service, index) => {
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
                            faqData={faqData} 
                        />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;