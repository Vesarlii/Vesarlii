function pobierzLicznik() {
    const savedLicznik = sessionStorage.getItem('licznik');
    if (savedLicznik) {
        document.getElementById('licznik').textContent = savedLicznik;
    }
}

// Pobierz początkowy stan licznika
pobierzLicznik();