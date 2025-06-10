const fs = require('fs');
const path = require('path');

function createFile(filePath, content) {
    fs.writeFileSync(filePath, content, { encoding: 'utf-8' });
}

function generateComponent(pageName, targetDir) {
    if (!targetDir) {
        console.log("Por favor, forneça o diretório onde será instalado o componente");
        return;
    }

    if (!pageName) {
        console.log('Por favor, forneça um nome para o componente.');
        return;
    }

    const componentDir = path.join(__dirname, "src", targetDir, pageName);

    if (fs.existsSync(componentDir)) {
        console.log('Erro: O componente já existe!');
        return;
    }

    fs.mkdirSync(componentDir.toLocaleLowerCase(), { recursive: true });

    const componentView = generateView(pageName);
    const componentTypes = generateTypes(pageName);
    const componentModel = generateModel(pageName, targetDir);
    const componentViewModel = generateViewModel(pageName, targetDir);
    const componentScss = generateScss(pageName, targetDir);

    createFile(path.join(componentDir, `${pageName}.tsx`), componentView);
    createFile(path.join(componentDir, `${pageName}Types.tsx`), componentTypes);
    createFile(path.join(componentDir, `${pageName}Model.ts`), componentModel);
    createFile(path.join(componentDir, `${pageName}ViewModel.ts`), componentViewModel);
    createFile(path.join(componentDir, `${pageName}.module.scss`), componentScss);

    console.log(`Componente ${pageName} criado com sucesso!`);
}

function generatePage(pageName, targetDir) {
    if (!targetDir) {
        console.log("Por favor, forneça o diretório onde será instalado a página");
        return;
    }

    if (!pageName) {
        console.log('Por favor, forneça um nome para página.');
        return;
    }

    const newPageName = pageName;

    const componentDir = path.join(__dirname, "src", targetDir, newPageName);

    if (fs.existsSync(componentDir)) {
        console.log('Erro: A página já existe!');
        return;
    }

    fs.mkdirSync(componentDir.toLocaleLowerCase(), { recursive: true });

    const componentView = generateViewPage(newPageName);
    const componentTypes = generateTypes(newPageName);
    const componentModel = generateModelPage(newPageName, targetDir);
    const componentViewModel = generateViewModelPage(newPageName, targetDir);
    const componentScss = generateScss(newPageName, targetDir);

    createFile(path.join(componentDir, `${newPageName}.tsx`), componentView);
    createFile(path.join(componentDir, `${newPageName}Types.tsx`), componentTypes);
    createFile(path.join(componentDir, `${newPageName}Model.ts`), componentModel);
    createFile(path.join(componentDir, `${newPageName}ViewModel.ts`), componentViewModel);
    createFile(path.join(componentDir, `${newPageName}.module.scss`), componentScss);

    console.log(`Componente ${pageName} criado com sucesso!`);
}

function generateView(pageName) {
    return `
import style from "./${pageName}.module.scss";
import { use${pageName}ViewModel } from "./${pageName}ViewModel";
import { ${pageName}Props } from "./${pageName}Types";

function ${pageName}(props: ${pageName}Props){
    const {} = use${pageName}ViewModel(props);

    return(
        <div className={style.${pageName.toLocaleLowerCase()}}>
            {/* your code here */}
        </div>
    )
}

export default ${pageName}
`;
};

function generateViewPage(pageName) {
    return `
import style from "./${pageName}.module.scss";
import { use${pageName}ViewModel } from "./${pageName}ViewModel";

function ${pageName}(){
    const { navigate } = use${pageName}ViewModel();

    return(
        <div className={style.${pageName.toLocaleLowerCase()}}>
            {/* your code here */}
        </div>
    )
}

export default ${pageName}
`;
};

function generateTypes(pageName) {
    return `
export interface ${pageName}Props{}    
    `
}

function generateViewModel(pageName, targetDir) {
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);

    return `
import { use${pageName}Model } from "./${pageName}Model";
import { ${pageName}Props } from "./${pageName}Types";

export function use${pageName}ViewModel(props: ${pageName}Props){
    const {} =  use${pageName}Model();
    // your code here
    return{}
}
    `
}

function generateViewModelPage(pageName, targetDir) {
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);

    return `
import { use${pageName}Model } from "./${pageName}Model";
// import { } from "./${pageName}Types";

export function use${pageName}ViewModel(){
    const { navigate } =  use${pageName}Model();
    // your code here
    return{ navigate }
}
    `
}

function generateModel(pageName, targetDir) {
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);


    return `
// import { } from "./${pageName}Types";

export function use${pageName}Model(){
    // your code here
    return{}
}
    `
}

function generateModelPage(pageName, targetDir) {
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);

    return `
import { useNavigate } from "react-router-dom";
import { useBaseContextData } from "context/BaseContext";
// import { } from "./${pageName}Types";

export function use${pageName}Model(){
    const context = useBaseContextData();
    const navigate = useNavigate();

    return {
        context,
        navigate,
    }
}
    `
}

function generateScss(pageName, targetDir) {
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);
    let relativePath = path.relative(componentDir, path.join(srcDir, 'assets', 'scss', 'styled.scss'));

    relativePath = relativePath.replace(/\\/g, '/');

    return `
@import "${relativePath}";

.${pageName.toLocaleLowerCase()}{}
`;
}

const command = process.argv[2];
const pageName = process.argv[3];
const targetDir = process.argv[4];

if (command === "component") {
    generateComponent(pageName, targetDir);
} else if (command === "page") {
    generatePage(pageName, targetDir);
} else {
    console.log("Comando inválido!")
    console.log("Execute o comando generate-item component ou page NOMEITEM DIRETÓRIO")
}

