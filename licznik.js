function zliczKlikniecia() {
    let licznik = localStorage.getItem('licznik') || 0;
    licznik = parseInt(licznik, 10) + 1;
    localStorage.setItem('licznik', licznik);
}