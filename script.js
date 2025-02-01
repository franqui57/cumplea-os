function showMessage(messageId) {
    // Mostrar el mensaje correspondiente
    document.getElementById(messageId).style.display = 'block';

    // Mostrar confetti por 5 segundos
    document.getElementById('confetti').style.display = 'block';
    setTimeout(function() {
        document.getElementById('confetti').style.display = 'none';
    }, 5000);  // El confetti desaparece después de 5 segundos
}
