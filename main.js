const input = require('prompt-sync')({sigint: true});

const nama = input("Masukkan nama Anda:");
const umur = Number(input("Masukkan umur Anda:"));

if (umur < 21) {
    console.log("Maaf " + nama + ", umur kamu kurang " + (21 - umur) + " tahun lagi");
} else {
    console.log("Seberapa banyak uang kamu anak muda?");
    const uang = Number(input("Masukkan jumlah uang Anda:"));

    if (uang < 500000) {
            console.log("Maaf " + nama + ", uang kamu cuma " + (uang) + " datang lagi lain kali");
        } else {
            console.log("Selamat datang " + nama);
        }
}