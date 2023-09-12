"use strict";
const submitBtn = document.querySelector("#submit-link");
const emailInput = document.querySelector("#input-email-address");
const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};
const shake = (elem) => {
    elem.classList.add("shake");
    setTimeout(() => {
        elem.classList.remove("shake");
    }, 500);
};
submitBtn.addEventListener("click", (event) => {
    if (validateEmail(emailInput.value)) {
        if (emailInput.classList.contains("error")) {
            emailInput.classList.remove("error");
            document.querySelector(".error-message").textContent = "";
        }
        ;
        localStorage.setItem("emailAdress", String(emailInput.value.trim()));
        emailInput.value = "";
    }
    else {
        if (emailInput.classList.contains("error")) {
            event.preventDefault();
            shake(emailInput);
        }
        else {
            event.preventDefault();
            emailInput.classList.add("error");
            shake(emailInput);
            document.querySelector(".error-message").textContent = "Invalid Email address";
        }
    }
});
