/*marcacao das paginas*/ const links = document.querySelectorAll(".header-menu a"); 

function ativarLink(link) {

const url = location.href;
const href = link.href;

if (url.includes(href)){
link.classList.add("ativo");
}
}

links.forEach(ativarLink); /* fim da marcacao das paginas*/ 

/*envio de informações de orçamentos/seguros*/ 

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {

    const elemento = document.getElementById(parametro);
    if(elemento){
    elemento.checked = true;
    }
    
    console.log(elemento);
}

parametros.forEach(ativarProduto); /*fim do envio de informações de orçamentos/seguros*/ 


/*edição botões FAQ*/ 

const perguntas = document.querySelectorAll(".perguntas button")


function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("arial-expanded", ativa);
   
}

function eventosPerguntas(pergunta) {

    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


/*fim edição botões FAQ*/ 