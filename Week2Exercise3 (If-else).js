var nama = "Jack";
var peran = "Ksatria";

if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Halo " + nama + ", pilih peranmu untuk memulai game!");
} else if (peran !== "Ksatria" && peran !== "Tabib" && peran !== "Penyihir") {
  console.log("Nama peran tidak terdaftar!")
}
else if (nama && peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (nama && peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (nama && peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
} 