const formValidate = () => {
    const heroFormName = document.querySelectorAll('[name="user_name"]')
    const heroFormEmail = document.querySelectorAll('[type=email]')
    const heroFormTel = document.querySelectorAll('[type=tel]')
    const formMessage = document.querySelector('[placeholder="Ваше сообщение"]')

    
    heroFormName.forEach(heroFormName =>
        heroFormName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, "") 
    }))

    heroFormEmail.forEach(heroFormEmail =>
        heroFormEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-z@\-\.\!\~\*\']/g, "") 
    }))

    heroFormTel.forEach(heroFormTel =>
        heroFormTel.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, "") 
    }))

    formMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, "") 
    })

}

export default formValidate