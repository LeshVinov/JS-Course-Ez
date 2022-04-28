const modal = () => {
    // const modal = document.querySelector('.popup')
    // // const modalContent = document.querySelector('.popup-content')
    // const buttons = document.querySelectorAll('.popup-btn')
    // const closeBtn = modal.querySelector('.popup-close')


    // const disableAnims = () => {
    //     if (window.innerWidth <= 768) {
    //         modal.style.display = 'none'
    //         modal.style.transform = 'translateX(0%)'
    //         buttons.forEach(btn => {
    //             btn.addEventListener('click', () => {
    //                 modal.style.display = 'block'
    //             })
    //         })
    //         closeBtn.addEventListener('click' , () => {
    //             modal.style.display = 'none'
    //         })
    //     } else if (window.innerWidth > 768) {
    //         modal.style.display = 'block'
    //         modal.style.transform = 'translateX(-100%)'
    //         modal.style.transition = '.2s'
            
        
    //         buttons.forEach(btn => {
    //             btn.addEventListener('click', () => {
    //                 modal.style.transform = 'translateX(0%)'
    //             })
    //         })
    //         closeBtn.addEventListener('click' , () => {
    //             modal.style.transform = 'translateX(-100%)'
    //         })
    //     }
    // }
    // disableAnims()


    const modal = document.querySelector('.popup')
    const modalContent = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')

    let count = -38
    let intervalId
    modalContent.style.left = `${count}%`

    
    const disableAnims = (count) => {           
        modalContent.style.left = `${count}%`
    }

    const counterOpen = () => {
        count += 4
        disableAnims(count)
        if (count >= 40) {
            clearInterval(intervalId)
        }
    }
    const counterClose = () => {
        count -= 4
        disableAnims(count)
        if (count <= -38) {
            clearInterval(intervalId)
            modal.style.display = ''
            count = -38
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                modalContent.style.left = ``
                modal.style.display = 'block'
            } else {
                modal.style.display = 'block'
                intervalId = setInterval(counterOpen, 10)
            }
        })
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (window.innerWidth > 768) {
                intervalId = setInterval(counterClose, 10)
            } else {
                modal.style.display = ''
            }   
        }
    })
}

export default modal