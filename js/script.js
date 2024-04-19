let input = document.getElementById("input")
let form = document.getElementById("form")
let submit_btn = document.getElementById("submit-btn")
let error = document.getElementById("error")
let main = document.getElementById('main')
let success = document.getElementById("success")
let dismiss = document.getElementById("dismiss")
let user_email = document.getElementById("email")
form.addEventListener('submit', validate)

dismiss.addEventListener('click', toggle)

function toggle() {

    main.classList.toggle("hidden")
    success.classList.toggle("hidden")
}

function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}
function validate(e) {
    e.preventDefault()
    if (input.value != "" || validURL(input.value)) {
        main.classList.toggle("hidden")
        let email = input.value
        user_email.innerHTML = email
        success.classList.toggle("hidden")

    }
    else {
        error.classList.remove("hidden")
    }
}