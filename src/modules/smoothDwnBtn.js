const smoothDwnBtn = () => {
    const downBtn = document.querySelector('[href="#service-block"]')
    const serviceBlock = document.getElementById('service-block')

    // downBtn.setAttribute('href', '')
    // console.log(downBtn)

    downBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        serviceBlock.scrollIntoView({block: "start", behavior: "smooth"});
    })
}

export default smoothDwnBtn