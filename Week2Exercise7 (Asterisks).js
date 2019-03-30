// question 1

var rows1 = 5

for(var i = 1; i <= rows1; i++) {
  console.log("*")
}

// question 2

var rows2 = 5

for(var i = 1; i <= rows2; i++) {
  var output = ""
  for(var j = 1; j <= rows2; j++) {
    output += "*"
  } 
  console.log(output)
}

// question 3

var rows1 = 5

for(var j = 1; j <= rows1; j++) {
  var output = ""
  for(var i = 1; i <= j; i++) {
      output += "*"
    } 
  console.log(output)
}
