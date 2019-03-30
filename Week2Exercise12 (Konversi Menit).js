
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

  // TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00