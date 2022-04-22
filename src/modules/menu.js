const menu = () => {
    const menu = document.querySelector('menu')
    const serviceBlock = document.getElementById('service-block')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
            handleMenu()
        } else if (e.target.closest('ul>li>a')) {
             e.preventDefault()
             let anchor = document.querySelector(e.target.hash)
             anchor.scrollIntoView({block: "start", behavior: "smooth"});
             handleMenu()
        } else if (e.target.closest('.menu')) {
            handleMenu()
        } else if (e.target == document.querySelector('main > a > img')) {
            e.preventDefault()
            serviceBlock.scrollIntoView({block: "start", behavior: "smooth"});
        } else if (!e.target.closest('.active-menu')) {
            menu.classList.remove('active-menu')
        }

    })

}

export default menu