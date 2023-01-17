const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
                    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z","0","1","2","3","4","5","6","7",
                    "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_",
                    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
                    "/"];

const passbox1 = document.getElementById("password1")
const passbox2 = document.getElementById("password2")

let passLength 
let password1 = "";
let password2 = "";

function passwordGenerator() {
    passLength = document.getElementById("length").value
    for (i = 0; i < passLength; i++) {
    //    console.log(i)
        password1 += characters[Math.floor(Math.random()*characters.length)]
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }

    passbox1.innerText = password1
    passbox2.innerText = password2
    // console.log(password1)
    // console.log(password1.length)
    // console.log(password2)
    // console.log(password2.length)
    password1 = ""
    password2 = ""
}

