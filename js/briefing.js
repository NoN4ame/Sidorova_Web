const briefing = {
    init() {
        this.aboutBriefing()
        templates[0].contacts(0)
    },
    // Попап о брифинге
    aboutBriefing() {
        document.querySelector('.about-briefing').addEventListener('click', (e) => {
            document.querySelector('.header__offer').insertAdjacentHTML('afterend',
                `<div class="about-briefing__popUp">
                        <p>Бриф — небольшая анкета между клиентом
                          и исполнителем, в которой закрепляются
                          важные параметры и данные для разработки
                          сайта. Бриф по сути является техническим
                          заданием. Именно благодаря ему становятся
                          понятными исходные данные и предпочтения
                          заказчика, что позволяет создать продукт
                          полностью отвечающий поставленным
                          требованиям.
                        </p>
                        <img src="img/miniWaves.jpg" alt="">
                        <button><img class="closePopUp" src="img/close.svg" alt=""></button>
                      </div>`)
            setTimeout(this.showPopUp, 100)
            this.closePopUp()
            // Проверяем есть ли класс который показывает поп ап, если есть, то при клике удаляем его
            // не допуская клонирования
            if (document.querySelector('.popUpActive')
                && e.target === document.querySelector('.about-briefing')) {
                document.querySelector(".about-briefing__popUp").remove()
            }
        })
    },
    showPopUp() {
        document.querySelector('.about-briefing__popUp').classList.add('popUpActive')

    },
    closePopUp() {
        document.querySelector('.closePopUp').addEventListener('click', function (e) {
            if (e.target === this) {
                setTimeout(function () {
                    document.querySelector('.about-briefing__popUp').classList.remove('popUpActive')
                }, 100)
                setTimeout(function () {
                    document.querySelector('.about-briefing__popUp').remove()
                }, 300)
            }
        })
    },
    // Методы для перехода между страницами брифинга
    nextPage(id) {
        if (id < 4) {
            id++
            renderTemplate(id)
        } else if (id > 1) {
            id--
            this.backPage(id)
        }
    },
    backPage(id) {
        id--
        renderTemplate(id)
    },

}
// Отрисовка шаблонов для брифинга
// Где id это номер страницы
function renderTemplate(id) {
    switch (id) {
        case 1:
            if (id === 1) {
                templates[0].contacts(id - 1)
            }
            break
        case 2:
            if (id === 2) {
                templates[1].aboutCompany(id - 1)
            }
            break
        case 3:
            if (id === 3) {
                templates[2].design(id - 1)
            }
            break
        case 4:
            if (id === 4) {
                templates[3].feedBack(id - 1)
            }
    }
}

briefing.init()
