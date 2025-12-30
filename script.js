document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Protezione Hacker (Disabilita F12, Tasto Destro, Ctrl+U e altri)
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function(e) {
        if (e.keyCode == 123) return false; // F12
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0))) return false; // Ctrl+Shift+I/J/C
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
        if (e.ctrlKey && e.keyCode == 83) return false; // Ctrl+S
        if (e.ctrlKey && e.keyCode == 65) return false; // Ctrl+A
        if (e.ctrlKey && e.keyCode == 80) return false; // Ctrl+P
        if (e.ctrlKey && e.keyCode == 70) return false; // Ctrl+F
        if (e.ctrlKey && e.shiftKey && e.keyCode == 75) return false; // Ctrl+Shift+K
    };

    // Rilevamento DevTools
    let devtools = {open: false};
    const threshold = 160;
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                alert('Strumenti di sviluppo rilevati! Accesso bloccato.');
                window.location.href = 'about:blank';
            }
        } else {
            devtools.open = false;
        }
    }, 500);

    // Controllo HTTPS
    if (location.protocol !== 'https:') {
        alert('Per motivi di sicurezza, il sito deve essere accessibile tramite HTTPS.');
        document.body.innerHTML = '<h1>Accesso sicuro richiesto. Usa HTTPS.</h1>';
    }
});
