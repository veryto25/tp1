const nombre = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("number")
const asunto = document.getElementById("subject")
const parrafo = document.getElementById("warnings")
const mensaje = document.getElementById("message")

// function validateForm(){
//     let formulario = document.forms["myForm"]["name"]["email"]["number"]["subject"]["message"]["send"].value;

//     if (formulario == ""){
//         alert("no validado!");
//         return false;
//     }
// }

form.addEventListener("submit", e => {
    e.preventDefault()

    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexTelefono = /^\d{10}$/
    parrafo.innerHTML = ""

    if(nombre.value.length < 3){
        warnings += `Nombre no valido. Min 3 caract. <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Email no valido. <br>`
        entrar = true
    }
    if(!regexTelefono.test(telefono.value)){
        warnings += `Numero no valido. 10 caract. <br>`
        entrar = true
    }

    if(asunto.value.length > 20){
        warnings += `Asunto máximo 20 caracteres. <br>`
        entrar = true
    }

    if(mensaje.value.length > 100 || mensaje.value.length < 3){
        warnings += `Mensaje min 3 y máx 100 caracteres <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        alert("Gracias por contactarnos. En breve nos comunicaremos!")
        document.getElementById("form").reset()
    }
})



function cleanForm(){
    document.getElementById("form").reset()
}



// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handlesubmit)

// async function handlesubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })

//     if (response.ok){
//         this.reset()
//         alert("Gracias por contactarnos! En breve nos comunicaremos contigo!")
//     }

// }