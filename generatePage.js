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

    if (fs.existsSync(componentDir)) {
        console.log('Erro: O componente/página já existe!');
        return;
    }

    fs.mkdirSync(componentDir.toLocaleLowerCase(), { recursive: true });

    const componentView = generateView(pageName);
    const componentTypes = generateTypes(pageName);
    const componentModel = generateModel(pageName);
    const componentViewModel = generateViewModel(pageName, targetDir); 
    const componentScss = generateScss(pageName, targetDir);

    createFile(path.join(componentDir, `${pageName}.tsx`), componentView);
    createFile(path.join(componentDir, `${pageName}Types.tsx`), componentTypes);
    createFile(path.join(componentDir, `${pageName}Model.ts`), componentModel);
    createFile(path.join(componentDir, `${pageName}ViewModel.ts`), componentViewModel);
    createFile(path.join(componentDir, `${pageName}.module.scss`), componentScss);

    console.log(`Componente ${pageName} criado com sucesso!`);
}

function generateView(pageName) {
    return `
import { use${pageName}, ${pageName}Props} from "./use${pageName}";
import style from "./${pageName}.module.scss";
import { use${pageName}ViewModel } from "./use${pageName}ViewModel";
import { ${pageName}Props } from "./${pageName}Types";

function ${pageName}(props: ${pageName}Props){
    const logic = use${pageName}();

    return(
        <div className={style.${pageName.toLocaleLowerCase()}}>
            {/* your code here */}
        </div>
    )
}

export default ${pageName}
`;
};

function generateTypes(pageName){
    return `
export interface ${pageName}Props{}    
    `
}

function generateViewModel(pageName, targetDir){
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);
    let relativePath = path.relative(componentDir, path.join(srcDir, 'utils', 'hooks.ts'));

    return `
import { use${pageName}Model } from "./${pageName}Model";
import { ${pageName}Props } from "./${pageName}Types";
import { hooks } from "${relativePath}";

export function use${pageName}ViewModel(props: ${pageName}Props){
    // your code here
    return{}
}
    `
}

function generateModel(pageName, targetDir){
    const srcDir = path.join(__dirname, 'src');
    const componentDir = path.join(srcDir, targetDir, pageName);
    let relativePath = path.relative(componentDir, path.join(srcDir, 'utils', 'hooks.ts'));

    return `
import { hooks } from "${relativePath}";
// import { } from "./${pageName}Types";

export function use${pageName}Model(){
    // your code here
    return{}
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

const pageName = process.argv[2];
const targetDir = process.argv[3];

generatePage(pageName, targetDir);
