const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')

    const inputPhone = document.querySelectorAll('[name="user_phone"]')
    const inputName = document.querySelectorAll('[name="user_name"]')
    const inputUserMessage = document.querySelectorAll('[name="user_message"]')

    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'

    statusBlock.classList.add('white-text')

    const validate = (formElements) => {
        let success = true
        console.log(formElements);
        formElements.forEach(inputName => {
            if (inputName.classList.contains('form-name')) {
                if (inputName.value.match(/[^а-яА-Я\-\s]/g)) {
                    success = false
                    // console.log('Данные не валидны')
                }
            }
        })
        formElements.forEach(inputPhone => {
            if (inputPhone.classList.contains('form-phone')) {
                if (inputPhone.value.match(/[^0-9\(\)\-]/g)) {
                    success = false
                    // console.log('Данные не валидны')
                }
            } 
        })
        formElements.forEach(inputUserMessage => {
            if (inputUserMessage.classList.contains('mess')) {
                if (inputUserMessage.value.match(/[^а-яА-Я\-\s]/g)) {
                    success = false
                    // console.log('Данные не валидны')
                }
            } 
        })
        
        // if (!inputPhone.value.match(/[^0-9\(\)\-]/g) 
        //     || !inputName.value.match(/[^а-яА-Я\-\s]/g) 
        //     || !inputUserMessage.value.match(/[^а-яА-Я\-\s]/g)) {
        //         console.log('Данные не валидны');
        //     }

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    
    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            // console.log(element);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        // console.log('submit');

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
            
        } else {
            alert('Данные не валидны')
            statusBlock.textContent = errorText
        }
    }

    try {
        if (!form) {
            throw new Error ('Верните форму')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()
    
            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm