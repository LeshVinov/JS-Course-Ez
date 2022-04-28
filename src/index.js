import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calculator from './modules/calculatorValidate'
import formValidate from './modules/formValidate'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
// import sendingFormTest from './modules/sendFormTest'
import sendForm from './modules/sendForm'
import helpers, { animate } from './modules/helpers'

timer('30 april 2022')
menu()
modal()
calculator()
// formValidate()
tabs()
slider()
calc(100)
// sendingForm()
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})

helpers()