//нажатие кнопки "регистрация"
const signupBtn = document.querySelector(".signup-btn")
const form0 = document.querySelector(".login-form-0active")
const form1 = document.querySelector(".login-form-1hiden")
const loginBtn = document.querySelector(".login-btn")


signupBtn.addEventListener("click", ()=> {

    form0.classList.remove("login-form-0active")
    form0.classList.add("login-form-0hiden")
    signupBtn.classList.add("signup-btn-actived")
    form1.classList.remove("login-form-1hiden")
    form1.classList.add("login-form-1active")
    loginBtn.classList.add("login-btn-actived")
}
)


loginBtn.addEventListener("click", ()=> {

    form1.classList.remove("login-form-1active")
    form1.classList.add("login-form-1hiden")
    loginBtn.classList.add("login-btn-actived")
    form0.classList.remove("login-form-0hiden")
    form0.classList.add("login-form-0active")
    signupBtn.classList.add("signup-btn-actived")
}
)

