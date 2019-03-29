// question 1
var i = 0

console.log("LOOPING PERTAMA")
while(i < 20) {
    i+=2
    console.log(i + " - I love coding")
}

console.log("LOOPING KEDUA")
while(i > 0) {
    console.log(i + " - I will become fullstack developer")   
    i-=2
}

// question 2
console.log("LOOPING PERTAMA")
for(var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding")
}

console.log("LOOPING KEDUA")
for(var i = 20; i >= 1; i--) {
  console.log(i + " - I will become fullstack developer")
}

// question 3

for(i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
      console.log(i + " GENAP")
    } else if(i % 2 == 1) {
      console.log(i + " GANJIL")
    }
  }

for(i = 1; i <= 100; i+=2) {
    if(i % 3 == 0) {
    console.log (i + " KELIPATAN 3")
    } else if(i % 3 == 1) {
    console.log(" ")
    }
}

for(i = 1; i <= 100; i+=5) {
    if(i % 6 == 0) {
      console.log (i + " KELIPATAN 6")
    } else if(i % 6 == 1) {
      console.log(" ")
    }
  }

  for(i = 1; i <= 100; i+=9) {
    if(i % 10 == 0) {
      console.log (i + " KELIPATAN 10")
    } else if(i % 10 == 1) {
      console.log(" ")
    }
  }
  
