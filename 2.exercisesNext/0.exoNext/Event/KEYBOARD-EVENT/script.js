const COLOR = [
    "#a7acff", "#89ab33", "#d3a7a7", "#1b3583", 
    "#96d222", "#6e2eb4", "#2b38aa", "#8dd6dc", 
    "#730917", "#46d2ab"
]

document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
          case 48: 
          document.getElementById("character").style.backgroundColor = COLOR[0]
                break
          case 49: 
          document.getElementById("character").style.backgroundColor = COLOR[1]
                break
          case 50: 
          document.getElementById("character").style.backgroundColor = COLOR[2]
                break
          case 51: 
          document.getElementById("character").style.backgroundColor = COLOR[3]
                break
          case 52: 
          document.getElementById("character").style.backgroundColor = COLOR[4]
                break
          case 53: 
          document.getElementById("character").style.backgroundColor = COLOR[5]
                break
          case 54: 
          document.getElementById("character").style.backgroundColor = COLOR[6]
                break
          case 55: 
          document.getElementById("character").style.backgroundColor = COLOR[7]
                break
          case 56: 
          document.getElementById("character").style.backgroundColor = COLOR[8]
                break
          case 57: 
          document.getElementById("character").style.backgroundColor = COLOR[9]
                break
          
          case 37:
                left.classList.add("highlight")
                break
          case 38:
                up.classList.add("highlight")
                break
          case 39:
                right.classList.add("highlight")
                break
          case 40:
                down.classList.add("highlight")
                break
    }
})

document.getElementById("reset").addEventListener("click",()=> {
    document.getElementById("character").style.backgroundColor = "#FFFFFF"
})

document.addEventListener("keyup", event => {
  switch (event.keyCode) {
    case 38:
      document.getElementById("up").classList.remove("highlight");
      break;
    case 37:
      document.getElementById("left").classList.remove("highlight");
      break;
    case 40:
      document.getElementById("down").classList.remove("highlight");
      break;
    case 39:
      document.getElementById("right").classList.remove("highlight");
      break;
  }
});