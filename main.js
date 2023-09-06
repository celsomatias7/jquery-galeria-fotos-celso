$(document).ready(function(){ /*no jquery sempre colocaremos $ e ().ready + uma function */
    $('header button').click(function(){
        $('form').slideDown(); /*efeito para deslizar o formulário para baixo */
    })

    $('#botao-cancelar').click(function(){ /*efeito para recolher o formulário */
        $('form').slideUp();
    })

    $('form').on('submit' , function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); /*constante que submete o item que o usuário deseja subir para página */
        const novoItem = $('<li style="display: none"></li>'); /*foi colocado o style para fazer o FADE IN na inserção de nova imagem */
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /* o appendTo pega o img src criado acima e inclui o mesmo dentro da tag LI */
        /*para colocar o link de ver a imagem em tamanho real encima da foto adicionada */
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
                `).appendTo(novoItem);
                $(novoItem).appendTo('ul');
                $(novoItem).fadeIn(2000); /*efeito que faz a imagem surgir lentamente ao ser inserida */
                $('#endereco-imagem-nova').val('');/*para fazer que o campo de inserir nova imagem fique vazio após a inclusão */
    })
})