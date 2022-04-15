const modal = () => {
    const modal = document.querySelector('.popup')
    // const modalContent = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')


    const disableAnims = () => {
        if (window.innerWidth <= 768) {
            modal.style.display = 'none'
            modal.style.transform = 'translateX(0%)'
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.style.display = 'block'
                })
            })
            closeBtn.addEventListener('click' , () => {
                modal.style.display = 'none'
            })
        } else if (window.innerWidth > 768) {
            modal.style.display = 'block'
            modal.style.transform = 'translateX(-100%)'
            modal.style.transition = '.2s'
            
        
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.style.transform = 'translateX(0%)'
                })
            })
            closeBtn.addEventListener('click' , () => {
                modal.style.transform = 'translateX(-100%)'
            })
        }
    }
    disableAnims()


//     const modal = document.querySelector('.popup')
//     // const modalContent = document.querySelector('.popup-content')
//     const buttons = document.querySelectorAll('.popup-btn')
//     const closeBtn = modal.querySelector('.popup-close')

//     let count = 100
//     let zeroCount = -100
//     let altCount = -100


//     const disableAnims = () => {
//         if (window.innerWidth <= 768) {
//             modal.style.display = 'none'
//             modal.style.transform = `translateX(${count}%)`
//             buttons.forEach(btn => {
//                 btn.addEventListener('click', () => {
//                     modal.style.display = 'block'
//                 })
//             })
//             closeBtn.addEventListener('click' , () => {
//                 modal.style.display = 'none'
//             })
//         } else if (window.innerWidth > 768) {
//             modal.style.display = 'block'
//             modal.style.transform = `translateX(${altCount}%)`
//             modal.style.transition = '.2s'
            
        
//             buttons.forEach(btn => {
//                 btn.addEventListener('click', () => {
//                     modal.style.transform = `translateX(${zeroCount}%)`
//                 })
//             })
//             closeBtn.addEventListener('click' , () => {
//                 modal.style.transform = `translateX(${altCount}%)`
//             })
//         }
//     }
//     disableAnims()

}

export default modal