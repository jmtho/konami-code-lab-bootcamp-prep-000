const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){

var index = 0

document.body.addEventListener('keydown', eventHandler)

function eventHandler(e) {
  const key = parseInt(e.detail || e.which)
  if(key === code[index]){
    index++
    //console.log("index ",index)
    if(index === code.length){
      alert("Congratulations, you won!")
      index = 0
    }
  } else {
    index = 0
  }
}
}
