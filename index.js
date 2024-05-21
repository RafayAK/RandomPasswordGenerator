const pass1 = document.getElementById("password1")
const pass2 = document.getElementById("password2")
const passwordItems = document.querySelectorAll(".password_item");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


pass1.value = "";
pass2.value = "";

function getRandomChar() {
    let randIndex = Math.floor(Math.random() * characters.length);  // 0 -90
    return characters[randIndex];
}

function generateRandomPass() {
    let password = "";
    // create a 15 char long password
    for (let index = 0; index < 15; index++) {
        password += getRandomChar();
       
    }
    return password;
}


function populatePasswords() {
    pass1.value = generateRandomPass();
    pass2.value = generateRandomPass();
    passwordItems.forEach(label => {
        label.classList.add('filled'); // This line ensures the "filled" class is added
    });
    console.log("Passwords generated.");
}


// create a copy to clipboard function
async function copyOnClick (input) {
    try {
      await navigator.clipboard.writeText(input.value);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
}

pass1.addEventListener("click", ()=> {
    if (pass1.value !== "") {
        const label = pass1.parentElement
        copyOnClick(pass1)

        // add the copied and nohover class to the label
        label.classList.add('copied', 'nohover');

        // remove copied class after 2000ms
        setTimeout(function() {
            label.classList.remove('copied');
        }, 2000);

        // remove nohover class after 5000ms
        setTimeout(function() {
            label.classList.remove('nohover');
        }, 5000);
    }
}) 


pass2.addEventListener("click", ()=> {
    if (pass2.value !== "") {
        const label = pass2.parentElement
        copyOnClick(pass2)

        // add the copied and nohover class to the label
        label.classList.add('copied', 'nohover');

        // remove copied class after 2000ms
        setTimeout(function() {
            label.classList.remove('copied');
        }, 2000);

        // remove nohover class after 5000ms
        setTimeout(function() {
            label.classList.remove('nohover');
        }, 5000);
    }
}) 
