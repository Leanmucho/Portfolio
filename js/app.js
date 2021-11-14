const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)


function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    console.log(form.get('email'))
    console.log(form.get('msg'))
    $buttonMailto.setAttribute('href', `mailto:acunaleandro3@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('msg')}`)
    $buttonMailto.click()
}

//boton menu hamburguesa

const iconoMenu = document.querySelector('#icono-menu')
const menu = document.querySelector('#menu')

iconoMenu.addEventListener("click", (e)=>{
    //Alternamos los estilos para el menu y el body
    menu.classList.toggle('active')
    document.body.classList.toggle('opacity')

    // //alternamos su atributo 'src' para el icono del menu
    // const rutaActual = e.target.getAttribute('src');

    // if(rutaActual == 'img/open-menu.png'){
    //     e.target.setAttribute('src', 'img/open-menu2.png')
    // } else {
    //     e.target.setAttribute('src','img/open-menu.png')
    // }
})