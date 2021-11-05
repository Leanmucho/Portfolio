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