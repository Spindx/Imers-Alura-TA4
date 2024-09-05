function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada carta no array de cartas
    for (let carta of cartas) {
        // Constrói o HTML para cada carta, incluindo título, link e descrição
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${carta.link} target="blank">${carta.titulo}</a>
                </h2>
                <p class="descrição-meta">${carta.descricao}</p>
            </div>
        `;
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}