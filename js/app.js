const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail')

// $form.addEventListener('submit', handleSubmit)


function handleSubmit(event){
    event.preventDefault()
    // const form = new FormData(this)
    // console.log(form.get('name'))
    // console.log(form.get('email'))
    // console.log(form.get('msg'))
    // $buttonMailto.setAttribute('href', `mailto:acunaleandro3@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('msg')}`)
    // $buttonMailto.click()
}

//boton menu hamburguesa

jQuery('document').ready(function($){
    let menuBtn = $('.menu-icon');
    let menu = $('.navigation ul');
    menuBtn.click(function(){
    if(menu.hasClass('show')){
        menu.removeClass('show')
    }else{
        menu.addClass('show')
    }
    })
    });