# r-Beauty
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900.svg?style=for-the-badge&logo=Leaflet&logoColor=white)
![ReactRouter](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

## 📖 Introdução
O **r-Beauty** nasceu de uma necessidade real, dentro da minha própria casa.

Minha esposa trabalha como consultora de beleza, representando marcas como Natura, Boticário, Eudora e tantas outras. Como muitos revendedores, ela gerenciava seus pedidos, clientes, estoques e pagamentos de forma manual — usando cadernos, planilhas e, às vezes, apenas a memória.

Esse processo, além de trabalhoso, estava suscetível a erros e demandava muito tempo. Foi aí que surgiu a ideia: criar uma plataforma simples, intuitiva e eficiente para ajudar não só ela, mas também milhares de consultores(as) de beleza que vivem o mesmo desafio.

O r-Beauty tem como missão *otimizar o tempo e profissionalizar a gestão de consultorias de beleza*, trazendo mais controle, organização e liberdade para quem empreende nesse segmento.

## 🔗 Link de Acesso
- [Clique aqui!](https://r-beauty-web.vercel.app/)

## 👥 Equipe
| [<img src="https://avatars.githubusercontent.com/u/111311678?v=4" width=115><br><sub>Daniel Emidio</sub>](https://github.com/DanielEmidio1988) |
| :---: |

## 🚀 Status do Projeto
- 🔧 Em desenvolvimento ativo

## 📢 Últimas Atualizações
* **Versão:** 2.0
* **Data de Atualização:** 05/11/2025

O **r-Beauty** está em constante atualização para oferecer uma melhor experiência aos usuários. As melhorias serão aplicadas de acordo com os feedbacks, sugestões e estudo de mercado.
1. Migração de sistema do Google App Script/Google Sheets para React.Js, permitindo uma interface mais moderna, dinâmica e eficiente;  

## 📜 Escopo do Projeto

### Arquitetura de pastas
- `📂 src `
  - `📂 assets` - Imagens, estilos globais, dados mockados
  - `📂 components` - Componentes reutilizáveis
  - `📂 context` - Gerenciamento de estados globais (Context API)
  - `📂 pages` - Páginas da aplicação
  - `📂 routes` - Definição de rotas
  - `📂 utils` - Funções utilitárias
  - `📂 types` - Tipagens TypeScript globais

### Tecnologias e Recursos
| Front-End       | Bibliotecas       |
| --------------- | ----------------- |
| React.js        | React Router Dom  |
| TypeScript      | Axios             |
| SCSS (Sass)     | React Hook Form   |
| Leaflet (mapas) | React Icons       |
|                 | UUID              |
|                 | Google Charts     |
|                 | Date Range Picker | 


## 🏗 Arquitetura MVVC
A aplicação *r-Beauty* foi construída utilizando a arquitetura MVVC (Model - View - ViewModel - Controller), visando maior organização, escalabilidade e manutenibilidade do código.

### Estrutura dos papéis
| Camada         | Descrição                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Model**      | Representa os dados da aplicação, incluindo entidades e tipagens globais (`/types`).                                                                  |
| **View**       | A interface visual renderizada ao usuário, composta por componentes e páginas (`/components`, `/pages`).                                              |
| **ViewModel**  | Responsável por preparar os dados da `Model` para a `View`, além de gerenciar estados e lógica de exibição (`/context`, `hooks`, funções de `utils`). |
| **Controller** | Controla o fluxo da aplicação, ações do usuário e integrações com a API (`/routes`, chamadas Axios).                                                  |


## 🎨 Layout
📱 *Mobile*: em desenvolvimento
🖥️ *Desktop*: em desenvolvimento

## ⚙ Instalação

### Pré-requisitos
* [Node.js](https://nodejs.org/pt/download/prebuilt-installer) (v18 ou acima)

### Clone o repositório
```
git clone https://github.com/DanielEmidio1988/r-beauty-web.git
cd r-beauty-web
```

### Instale as dependências
```
npm install
```

### Execute o projeto
```
npm start
```

## 💻 Como Usar
🚧 Documentação de uso em construção.

## 🤝 Contribuições
Este projeto é pessoal e, no momento, não está aberto para contribuições externas. Porém, feedbacks e sugestões são sempre bem-vindos!

📝 Licença Este projeto está sob licença MIT.