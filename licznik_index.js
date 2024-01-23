let licznik = 0;

function zliczKlikniecia() {
    licznik++;
    zapiszLicznikDoPamieci();
}

function zapiszLicznikDoPamieci() {
    sessionStorage.setItem('licznik', licznik);
}