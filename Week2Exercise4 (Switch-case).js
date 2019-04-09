var tanggal = 31 // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12 // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2005 // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if((bulan < 1 || bulan > 12) && (tanggal < 1 || tanggal > 31)) {
  console.log("nilai tanggal dan bulan invalid!")
} else if(bulan < 1 || bulan > 12) {
  console.log("nilai bulan invalid!")
} else if(tanggal < 1 || tanggal > 31) {
  console.log("nilai tanggal invalid!")
} else if(tanggal > 0 && tanggal <= 31 && bulan > 0 && bulan <= 12){
    switch (bulan) {
    case 1:
    console.log(tanggal + " Januari " + tahun);
    break;
    case 2: 
    console.log(tanggal + " Februari " + tahun);
    break;
    case 3: 
    console.log(tanggal + " Maret " + tahun);
    break;
    case 4: 
    console.log(tanggal + " April " + tahun);
    break;
    case 5:
    console.log(tanggal + " Mei " + tahun); 
    break;
    case 6:
    console.log(tanggal + " Juni " + tahun);
    break;
    case 7:
    console.log(tanggal + " Juli " + tahun);
    break;
    case 8:
    console.log(tanggal + " Augustus " + tahun);
    break;
    case 9:
    console.log(tanggal + " September " + tahun);
    break;
    case 10:
    console.log(tanggal + " Oktober " + tahun);
    break;
    case 11:
    console.log(tanggal + " November " + tahun);
    break;
    case 12:
    console.log(tanggal + " December " + tahun);
    break;
  }
}