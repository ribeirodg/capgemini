var botaoAdicionar = document.querySelector("#adicionar-anuncio");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var anuncio = obtemAnuncioDoFormulario(form);

    adicionaAnuncioNaTabela(anuncio);

    form.reset();

});

function obtemAnuncioDoFormulario(form) {

    var anuncio = {
        nome: form.nome.value,
        cliente: form.cliente.value,
        dataInicio: form.dataInicio.value,
        dataFim: form.dataFim.value,
        investimentoDiario: form.investimento.value,
        investimentoTotal: calculaInvestimento(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeVisualizacoes: calculaVisualizacoes(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeCliques: calculaCliques(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeCompartilhamentos: calculaCompartilhamentos(form.dataInicio.value, form.dataFim.value, form.investimento.value)
    }

    return anuncio;
}

function montaTr(anuncio) {
    var anuncioTr = document.createElement("tr");
    anuncioTr.classList.add("anuncio");

    anuncioTr.appendChild(montaTd(anuncio.nome, "info-nome"));
    anuncioTr.appendChild(montaTd(anuncio.cliente, "info-cliente"));
    anuncioTr.appendChild(montaTd(anuncio.dataInicio, "info-data-inicio"));
    anuncioTr.appendChild(montaTd(anuncio.dataFim, "info-data-fim"));
    anuncioTr.appendChild(montaTd(anuncio.investimentoDiario, "info-investimento-diario"));
    anuncioTr.appendChild(montaTd(anuncio.investimentoTotal, "info-investimento-total"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeVisualizacoes, "info-qtde-visualizacoes"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeCliques, "info-qtde-cliques"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeCompartilhamentos, "info-qtde-compartilhamentos"));

    return anuncioTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaAnuncioNaTabela(anuncio) {
    var anuncioTr = montaTr(anuncio);
    var tabela = document.querySelector("#tabela-anuncios");
    tabela.appendChild(anuncioTr);
}

var anuncios = document.querySelectorAll(".anuncio");

function calculaInvestimento(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    return investimentoTotal.toFixed(2);
}

function calculaVisualizacoes(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var qtdeVisualizacoes = investimentoTotal * 30;

    return qtdeVisualizacoes.toFixed(0);
}

function calculaCliques(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var qtdeVisualizacoes = investimentoTotal * 30;

    var pessoasQueClicam =  Math.floor(qtdeVisualizacoes * 12 / 100); 

    return pessoasQueClicam.toFixed(0);
}

function calculaCompartilhamentos(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var pessoasQueVisualizam ;

    var pessoasQueClicam;
    
    var pessoasQueCompartilham;
    
    var pessoasQueVisualizam = investimentoTotal * 30;
    
    for (let i = 0; i < 4; i++) {
        pessoasQueClicam =  Math.floor(pessoasQueVisualizam * 12 / 100); 
        pessoasQueCompartilham = Math.floor(pessoasQueClicam * 3 / 20);
        pessoasQueVisualizam = pessoasQueVisualizam + (pessoasQueCompartilham * 40);
    }
    
    return pessoasQueVisualizam.toFixed(0);
}
