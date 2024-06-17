const form = document.getElementById('formulario');

function validaNumero (campoAId , campoBId , mensagemId) {
    const campoA = parseFloat(document.getElementById(campoAId).value);
    const campoB = parseFloat(document.getElementById(campoBId).value);
    const mensagem = document.getElementById(mensagemId);

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        mensagem.className = 'message success';
    } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        mensagem.className = 'message error';
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    validaNumero('campoA', 'campoB', 'mensagem');
});

console.log(form);