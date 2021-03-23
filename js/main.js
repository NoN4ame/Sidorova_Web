const menu = {
    init() {
        this.showMenu()
    },
    showMenu() {
        let nav = document.querySelectorAll('.icon')
        let menuIcon = document.querySelector('.menu-icon')
        document.querySelector('.menu-icon').addEventListener('click', (e) => {
            nav.forEach(item => {
                if ((e.target === menuIcon || item) && item.classList.contains('closeIcon') === true) {
                    item.classList.remove('closeIcon')
                } else if (e.target === menuIcon || item) {
                    item.classList.add('closeIcon')
                }
            })
        })
    },
}
menu.init()