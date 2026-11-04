
let display = document.getElementById("display");
let history = document.getElementById("history");

// Memasukkan angka dan operator
function addValue(value) {
    if (display.value === "Error") {
        display.value = "0";
    }

    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Menghapus semua angka
function clearDisplay() {
    display.value = "0";
    history.innerHTML = "";
}

// Menghapus satu angka terakhir
function deleteNumber() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

// Menghitung persentase
function percentage() {
    let angka = Number(display.value);

    if (Number.isFinite(angka)) {
        display.value = angka / 100;
    }
}

// Menghitung hasil operasi
function calculate() {
    try {
        let soal = display.value;

        // Memeriksa karakter yang diperbolehkan
        if (!/^[0-9+\-*/.()\s]+$/.test(soal)) {
            throw new Error("Input tidak valid");
        }

        let hasil = Function(
            '"use strict"; return (' + soal + ')'
        )();

        if (!Number.isFinite(hasil)) {
            throw new Error("Perhitungan tidak valid");
        }

        history.innerHTML = soal + " =";
        display.value = Number(hasil.toPrecision(12));

    } catch {
        display.value = "Error";
    }
}
