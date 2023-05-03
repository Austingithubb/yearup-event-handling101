console.log("IF YOU SEE THIS, THEN THE JAVASCRIPT IS LOADING")
// The "document" object is the Dom (Document Object Model)
// The "DOM" is another way of calling the "HTML tree structure"

let loginForm = document.getElementById("login-form")
console.log(loginForm)

let emailInput = document.getElementById('Email1')
console.log(loginForm)

//console.log(loginForm.innerHTML)
//loginForm.innerHTML = "<h3>Welcome to Kandor</h3>"
// loginForm.innerHTML=welcome to kandor
function onlogin (event) {
    
    console.log(event)
    console.log(2 + 34)
}

loginForm.onsubmit = onlogin
