const fs = require('fs');
const path = require('path');

function createFile(filePath, content) {
    fs.writeFileSync(filePath, content, { encoding: 'utf-8' });
}

function generatePage(pageName, targetDir) {
    if (!targetDir) {
        console.log("Por favor, forneça o diretório onde será instalado o componente");
        return;
    }

    if (!pageName) {
        console.log('Por favor, forneça um nome para o componente/página.');
        return;
    }

    const componentDir = path.join(__dirname, "src", targetDir, pageName);
    
    // Verifica se o diretório já existe
    if (fs.existsSync(componentDir)) {
        console.log('Erro: O componente/página já existe!');
        return;
    }

    // Cria o diretório do componente
    fs.mkdirSync(componentDir.toLocaleLowerCase(), { recursive: true });

    const componentTsx = generateTsx(pageName);
    const componentScss = generateScss(pageName, targetDir); // Passando targetDir para a função
    const hookTs = generateTs(pageName);

    createFile(path.join(componentDir, `${pageName}.tsx`), componentTsx);
    createFile(path.join(componentDir, `${pageName}.module.scss`), componentScss);
    createFile(path.join(componentDir, `use${pageName}.ts`), hookTs);

    console.log(`Componente ${pageName} criado com sucesso!`);
}

function generateTsx(pageName) {
    return `
import { use${pageName}, ${pageName}Props} from "./use${pageName}";
import style from "./${pageName}.module.scss";

function ${pageName}(props: ${pageName}Props){
    const logic = use${pageName}();

    return(
        <></>
    )
}

export default ${pageName}
`;
}

function generateScss(pageName, targetDir) {
    // Calcular o caminho relativo de onde o arquivo SCSS deve ser importado
    const srcDir = path.join(__dirname, 'src'); // Diretório base src
    const componentDir = path.join(srcDir, targetDir, pageName); // Caminho do componente
    let relativePath = path.relative(componentDir, path.join(srcDir, 'assets', 'scss', 'styled.scss')); // Calculando o caminho relativo de styled.scss
    
    // Substitui as barras invertidas por barras normais
    relativePath = relativePath.replace(/\\/g, '/');

    return `
@import "${relativePath}";

.${pageName.toLocaleLowerCase()}{}
`;
}

function generateTs(pageName) {
    return `
import { useBaseContextData } from "context/BaseContext";
import { hooks } from "@utils/hooks";

export interface ${pageName}Props{};

export function use${pageName}(){
    const context = useBaseContextData();

    return {context};
}
`;
}

const pageName = process.argv[2];
const targetDir = process.argv[3];

generatePage(pageName, targetDir);
