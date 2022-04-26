const sendingForm = () => {
    const heroForm = document.querySelector('#form1')
    const footerForm = document.querySelector('#form2')
    const heroFormName = document.querySelector('#form1-name')
    const heroFormEmail = document.querySelector('#form1-email')
    const heroFormTel = document.querySelector('#form1-phone')
    const formMessage = document.querySelector('[placeholder="Ваше сообщение"]')

    const sendData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json())
    }
    
    const sendedform = (e) => {
        e.preventDefault()

       const user = {
           name: heroFormName.value,
           email: heroFormEmail.value,
           tel: heroFormTel.value
       }

       sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
            .then(data => {
                console.log(data);
            })
    }

    heroForm.addEventListener('submit', sendedform)
    footerForm.addEventListener('submit', sendedform)
}


export default sendingForm