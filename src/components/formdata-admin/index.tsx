
//Daniel: componente criado para a estrutura das áreas de cadastro como Marcas, Produtos, etc...
function FormDataAdmin() {
    return (
        <div className={`dataarea`}>
            <div className={``}>

                <button>Novo</button>
                {/* Filtro */}

            </div>
            <div className={`tabledata`}>
                <table>
                    <tr>
                        <th>Marca</th>
                        <th>Lucratividade</th>
                    </tr>
                    <tr>
                        <td>
                            <span>Boticário</span>
                        </td>
                        <td>
                            {/* Icones editar/excluir */}
                        </td>
                    </tr>
                </table>

            </div>
            <div className={`pagination`}>
                <button>Anterior</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>Próximo</button>
            </div>
        </div>
    )
}

export default FormDataAdmin;