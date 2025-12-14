const umur = Number(input("Masukkan umur Anda:"));
const nama = input("Masukkan nama Anda:");

if (umur < 21) {
    console.log("Maaf " + nama + ", umur kamu kurang " + (21 - umur) + " lagi");
} else if (umur >= 21) {
    console.log("Seberapa banyak uang kamu anak muda?");
} else {
    console.log("Selamat datang " + nama);
}