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
            this.renderNavigate()
        })

    },
    navigateTemplate() {
        document.querySelector('.menu-icon').insertAdjacentHTML('afterend',
            `<section class="nav">
                    <ul>
                    <li>Портфолио</li>
                    <li>Вилка цен</li>
                    <li>Бриф</li>
                    <li>Контакты</li>
                    </ul>
                  </section>`)
    },
    renderNavigate() {
        if (document.querySelector('.icon').classList.contains('closeIcon') === true) {
            this.navigateTemplate()
            setTimeout(this.openNavigateAnimate, 50)
        } else {
            document.querySelector('.nav').classList.remove('active')
            setTimeout(this.removeNavigate, 50)
        }
    },
    openNavigateAnimate() {
        document.querySelector('.nav').classList.add('active')
    },
    removeNavigate() {
        document.querySelector('.nav').remove()
    }
}
menu.init()