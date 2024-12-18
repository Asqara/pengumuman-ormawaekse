// Simulasi database kelulusan dalam bentuk array
const dataKelulusan = [
    { nim: "12345678", nama: "Budi Santoso", status: "LULUS",pilihan : "Biro Riset Pengembangan" },
    { nim: "M0401241104", nama: "Fitria Angelita Delvi", status: "LULUS",pilihan : "Biro Riset Pengembangan" },
    { nim: "11112222", nama: "Siti Aminah", status: "LULUS" ,pilihan : "Risbang" }
];

// Fungsi untuk mengecek kelulusan
function cekKelulusan() {
    const inputData = document.getElementById("inputData").value.trim();
    const errorElement = document.getElementById("error");

    // Reset pesan error sebelumnya
    errorElement.textContent = "";

    if (inputData === "") {
        errorElement.textContent = "Harap masukkan Nomor Pendaftaran atau Nama!";
        return;
    }

    // Cari data dalam "database" dengan case-insensitive
    const hasil = dataKelulusan.find(data => 
        data.nim === inputData || 
        data.nama.toLowerCase() === inputData.toLowerCase()
    );

    if (hasil) {
        try {
            // Simpan hasil ke localStorage dengan key yang unik
            localStorage.setItem("hasilKelulusan", JSON.stringify(hasil));
            
            // Redirect ke halaman hasil
            window.location.href = "hasil.html";
        } catch (e) {
            errorElement.textContent = "Gagal menyimpan data ke localStorage. Coba lagi!";
            console.error("localStorage error:", e);
        }
    } else {
        // Tampilkan error jika data tidak ditemukan
        errorElement.textContent = "Data tidak ditemukan. Periksa kembali input Anda!";
    }
}
