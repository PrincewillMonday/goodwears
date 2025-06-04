function showSideBar () {
    const sideBar = document.querySelector (".side-bar").style.display = "flex"
}

function hideMenu () {
    const sideBar = document.querySelector (".side-bar").style.display = "none"
}

// News Letter Email
let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let emailElement = document.getElementById ("email-el")

document.querySelector (".subscribe").addEventListener ("click", function (e) {
    e.preventDefault();

    if (emailElement.value === "") {
        alert ("Please enter your email address")
    } else if (!regEx.test(emailElement.value)) {
        alert ("Please enter a valid email address")
    } else {
        alert ("Thank you for subscribing with " + emailElement.value)
        emailElement.value = ""
    }

})

// Contact Form
let yourName = document.getElementById ("name")
let email = document.getElementById ("email")
let phone = document.getElementById ("phone")
let message = document.getElementById ("message")
let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
document.querySelector (".submit-btn").addEventListener ("submit", function (e) {
    e.preventDefault();
});

document.querySelector (".submit-btn").addEventListener ("click", function (e) {
    e.preventDefault();

    if (yourName.value === "" || email.value === "" || phone.value === "" || message.value === "") {
        alert ("Please fill in all fields")
    } else if (!regExEmail.test(email.value)) {
        alert ("Please enter a valid email address")
    } else {
        alert ("Thank you for your message!")
        yourName.value = ""
        email.value = ""
        phone.value = ""
        message.value = ""
    }

});
