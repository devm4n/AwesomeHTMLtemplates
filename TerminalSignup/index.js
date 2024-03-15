const input = document.getElementById('input');
const render = document.getElementById('render');
var Email = false;
var Name = false;
var password = false;
let inputvalue;

let credentials = {"Name":"ENTER YOUR NAME","Email":"ENTER YOUR EMAIL","password":"ENTER YOUR PASSWORD"}

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        console.log('Enter')
        inputvalue = input.value
        input.value = ""
        getCredential()
    }
})

function getCredential() {
        if(!Name) {
            render.innerHTML=""
            var cred = credentials["Name"]
            for (let x = 0; x<cred.length;x++) {
                setTimeout(() => {
                    console.log(cred[x])
                    render.innerHTML=render.innerHTML+cred[x]
                }, 50*x)
            Name=inputvalue
            }
        } else if (!Email) {
            render.innerHTML=""
            var cred = credentials["Email"]
            for (let x = 0; x<cred.length;x++) {
                setTimeout(() => {
                    console.log(cred[x])
                    render.innerHTML=render.innerHTML+cred[x]
                }, 50*x)
                Email = inputvalue
            }
        } else if (!password) {
            render.innerHTML=""
            var cred = credentials["password"]
            for (let x = 0; x<cred.length;x++) {
                setTimeout(() => {
                    console.log(cred[x])
                    render.innerHTML=render.innerHTML+cred[x]
                }, 50*x)
                password = inputvalue
            }

    } else if (password) {
        render.innerHTML="Thanks For signing up"
    }
}