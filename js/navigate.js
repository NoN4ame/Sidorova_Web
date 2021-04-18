const menu = {
    init() {
        this.showMenu()
        this.scrollNavigate()
    },
    // Навигация
    showMenu() {
        let nav = document.querySelectorAll('.icon')
        let menuIcon = document.querySelector('.menu-icon')
        // При клике на иконку меню
        document.querySelector('.menu-icon').addEventListener('click', (e) => {
            nav.forEach(item => {
                // Если меню навигации открыто, то при клике на иконку, скрываем меню и меняем иконку обратно
                if ((e.target === menuIcon || item) && item.classList.contains('closeIcon') === true) {
                    item.classList.remove('closeIcon')
                // Если меню закрыто, то при клике открываем его и меняем иконку на "X"
                } else if (e.target === menuIcon || item) {
                    item.classList.add('closeIcon')
                }
            })
            // Условия для адаптива
            if (document.body.clientWidth <= 1024 && document.body.clientWidth >= 768) {
                document.querySelector('.feedBack-contacts').classList.toggle('invisible')
            }
            this.renderNavigate()
            this.scrollNavigate()
        })

    },
    // Шаблон навигации
    navigateTemplate() {
        document.querySelector('.menu-icon').insertAdjacentHTML('afterend',
            `<section class="nav">
                    <ul>
                    <li><a class="links" href="#portfolio">Портфолио</a></li>
                    <li><a class="links" href="#price">Вилка цен</a></li>
                    <li><a class="links" href="#briefing">Бриф</a></li>
                    <li><a class="links" href="#contacts">Контакты</a></li>
                    </ul>
                  </section>`)
    },
    // Отрисовка шаблона навигации
    renderNavigate() {
        if (document.querySelector('.icon').classList.contains('closeIcon') === true) {
            this.navigateTemplate()
            // Добавляем класс анимации с небольшой задержкой, после инициализации навигации
            setTimeout(this.openNavigateAnimate, 50)
        } else {
            // Добавляем класс анимации с небольшой задержкой, после удаления навигации
            document.querySelector('.nav').classList.remove('active')
            setTimeout(this.removeNavigate, 50)
        }
    },
    openNavigateAnimate() {
        document.querySelector('.nav').classList.add('active')
    },
    removeNavigate() {
        document.querySelector('.nav').remove()
    },
    // Плавный скролл для якорных ссылок
    scrollNavigate() {
        let links = document.querySelectorAll('a[href^="#"]')
        for (let link of links) {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const id = link.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }
}
menu.init()