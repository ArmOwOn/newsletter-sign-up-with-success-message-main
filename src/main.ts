const submitBtn = document.querySelector("#submit-link") as HTMLAnchorElement;
const emailInput = document.querySelector(
  "#input-email-address"
) as HTMLInputElement;

const validateEmail = (email: string) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

const shake = (elem: HTMLElement) => {
  elem.classList.add("shake");
  setTimeout(() => {
    elem.classList.remove("shake");
  }, 500);
};

submitBtn.addEventListener("click", (event) => {
  if (validateEmail(emailInput.value)) {
    // Allow the link to be followed
    if (emailInput.classList.contains("error")) {
      emailInput.classList.remove("error");
      (
        document.querySelector(".error-message") as HTMLLabelElement
      ).textContent = "";
    }
    localStorage.setItem("emailAdress", String(emailInput.value.trim()));
    emailInput.value = "";
  } else {
    // Prevent the link from being followed
    if (emailInput.classList.contains("error")) {
      event.preventDefault();
      shake(emailInput);
    } else {
      event.preventDefault();
      emailInput.classList.add("error");
      shake(emailInput);
      (
        document.querySelector(".error-message") as HTMLLabelElement
      ).textContent = "Invalid Email address";
    }
  }
});
