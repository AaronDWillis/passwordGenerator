const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//This function dictates whether special characters should be used
function getCharacters (includeSpecialChar) {
    if (includeSpecialChar === true) {
        return characters
    } else if (includeSpecialChar === false) {
        const noSpecialChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        return noSpecialChar
    }
}

let specialChar = true

//This function adds a functional toggle between special characters and not
document.getElementById("special_characters").addEventListener("click", function toggleChar () {
    if (specialChar === false) {
        specialChar = true
        document.getElementById("special_characters").style.backgroundColor = "#A7C080";  
        document.getElementById("special_characters").style.color = "#1E2326"; 
    } else if (specialChar === true) {
        specialChar = false
        document.getElementById("special_characters").style.backgroundColor = "transparent";
        document.getElementById("special_characters").style.color = "#D3C6AA";  
    }
    return specialChar
})

document.getElementById("special")

//these blocks of code reset the passwords when their button is clicked 
let show = 4
document.getElementById("btn_one").addEventListener("click", function btnOne () {
    show = 1
    updateVisibility()
    pwdOne.textContent = ""
    pwdTwo.textContent = ""
    pwdThree.textContent = ""
    pwdFour.textContent = ""
})

document.getElementById("btn_two").addEventListener("click", function btnTwo () {
    show = 2
    updateVisibility()
    pwdOne.textContent = ""
    pwdTwo.textContent = ""
    pwdThree.textContent = ""
    pwdFour.textContent = ""
})

document.getElementById("btn_three").addEventListener("click", function btnThree () {
    show = 3
    updateVisibility()
    pwdOne.textContent = ""
    pwdTwo.textContent = ""
    pwdThree.textContent = ""
    pwdFour.textContent = ""
})

document.getElementById("btn_four").addEventListener("click", function btnFour () {
    show = 4
    updateVisibility()
    pwdOne.textContent = ""
    pwdTwo.textContent = ""
    pwdThree.textContent = ""
    pwdFour.textContent = ""
})


//This function allows for the passwords to be cleared
function updateVisibility () {
    if (show >= 2) {
        document.getElementById("password_2").style.visibility = "visible"
    } else {
        document.getElementById("password_2").style.visibility = "hidden"
    }
    if (show >= 3) {
        document.getElementById("password_3").style.visibility = "visible"
    } else {
        document.getElementById("password_3").style.visibility = "hidden"
    }
    if (show >= 4) {
        document.getElementById("password_4").style.visibility = "visible"
    } else {
        document.getElementById("password_4").style.visibility = "hidden"
    }
}

//Allows for password generation
let pwdLength = 15
let pwdOne = document.getElementById("password_1")
let pwdTwo = document.getElementById("password_2")
let pwdThree = document.getElementById("password_3")
let pwdFour = document.getElementById("password_4")

function pwdGen () {
    let charactersToUse = getCharacters(specialChar)
    let pwd = ""
    for (let i = 0; i < pwdLength; i++) {
        pwd += charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    }
    return pwd
}

function updatePwds () {
    pwdOne.textContent = pwdGen()
    pwdTwo.textContent = pwdGen()
    pwdThree.textContent = pwdGen()
    pwdFour.textContent = pwdGen()
}

document.getElementById("password_btn").addEventListener("click", updatePwds)

document.getElementById("reset_btn").addEventListener("click", function reset () {
    pwdOne.textContent = ""
    pwdTwo.textContent = ""
    pwdThree.textContent = ""
    pwdFour.textContent = ""
})

function copyPwd () {
    document.execCommand("copy");
}