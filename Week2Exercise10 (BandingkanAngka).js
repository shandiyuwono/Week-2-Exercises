// question 1

function bandingkanAngka(angka1, angka2) {
    if(angka2 > angka1) {
      return "TRUE"
    } else if(angka2 < angka1) {
      return "FALSE"
    } else if(angka2 === angka1) {
      return "-1"
    }
  }
  
  console.log(bandingkanAngka(5, 3))

  // question 2

function balikKata(kata) {
  var kata2 = ""
  for(i = kata.length -1; i >= 0; i--){
    kata2 += kata[i]
  }
  return kata2
}

console.log(balikKata('John Doe'))

// question 3

function konversiMenit(menit) {
    var jam = menit / 60;
    var tjam = Math.floor(jam);
    menit = (jam - tjam) * 60;
    tmenit = Math.round(menit)
    if(tmenit < 10) {
      return tjam + ":" + "0" + tmenit
    }
    return tjam + ":" + tmenit
  }