import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../utils/hooks";
import {BsBox2Fill, BsGraphUpArrow, BsTagFill, BsCreditCardFill, BsBarChartFill, BsFillPeopleFill} from "react-icons/bs";
import React from "react";
import { IFaq } from "@components/faq/FAQTypes";

export interface HomePageProps { };

interface IService {
    icon: JSX.Element;
    title: string;
    content: string;
}

export function useHomePage() {
    const context = useBaseContextData();
    const navigate = hooks.useNavigate();
    const services: IService[] = [
        {
            icon: React.createElement(BsBox2Fill),
            title: "Gestão de Estoque",
            content: "Mantenha o controle total do seu estoque, garantindo disponibilidade de produtos e evitando rupturas"
        },
        {
            icon: React.createElement(BsGraphUpArrow),
            title: "Controle de Fluxo de Vendas",
            content: "Acompanhe suas vendas em tempo real e tenha uma visão clara sobre o desempenho do seu negócio"
        },
        {
            icon: React.createElement(BsTagFill),
            title: "Gestão de Promoções",
            content: "Crie, gerencie e monitore promoções para atrair mais clientes e aumentar suas vendas."
        },
        {
            icon: React.createElement(BsCreditCardFill),
            title: "Acompanhamento de Vendas Parceladas",
            content: "Gerencie o parcelamento de vendas e acompanhe o recebimento de cada parcela com precisão."
        },
        {
            icon: React.createElement(BsBarChartFill),
            title: "Relatórios Completos",
            content: "Obtenha relatórios detalhados que ajudam a entender o desempenho geral de suas vendas e estoque."
        },
        {
            icon: React.createElement(BsFillPeopleFill),
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

    return { context, navigate, services, faqData }
}
