const answer = []
const briefing = {
    init() {
        this.aboutBriefing()
        templates[2].design(3)
        this.briefing()
    },
    aboutBriefing() {
        document.querySelector('.about-briefing').addEventListener('click', (e) => {
            document.querySelector('.header__offer').insertAdjacentHTML('afterend',
                `<div class="about-briefing__popUp">
                        <p>Бриф — небольшая анкета между клиентом <br>
                          и исполнителем, в которой закрепляются<br>
                          важные параметры и данные для разработки<br>
                          сайта. Бриф по сути является техническим<br>
                          заданием. Именно благодаря ему становятся<br>
                          понятными исходные данные и предпочтения<br>
                          заказчика, что позволяет создать продукт,<br>
                          полностью отвечающий поставленным<br>
                          требованиям.
                        </p>
                        <img src="../img/miniWaves.jpg" alt="">
                        <button><img class="closePopUp" src="../img/close.svg" alt=""></button>
                      </div>`)
            setTimeout(this.showPopUp, 100)
            this.closePopUp()
            // Проверяем есть ли класс который показывает поп ап, если есть, то при клике удаляем его
            // не допуская клонирования
            if (document.querySelector('.popUpActive').classList.contains('popUpActive') === true
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
    briefing() {
        let allInputs = Array.from(document.getElementsByTagName('input'))
        let id = parseInt(document.getElementById('currentId').textContent)
        document.getElementById('form').addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target === document.getElementById('next') && id < 5) {
                //questions[0].answers = {
                //    nameCompany: allInputs[0].value,
                //    phone: allInputs[1].value,
                //    webSite: allInputs[2].value,
                //    email: allInputs[3].value,
                //    social: allInputs[4].value
                //}
                console.log(id);
                id++
                this.renderTemplate(id)
            } else if (e.target === document.getElementById('back') && id > 1) {

                id--
                this.renderTemplate(id)
            }
        })
    },
    renderTemplate(id) {
        switch (id) {
            case 1:
                if (id === 1) {
                    templates[0].contacts(id)
                }
                break
            case 2:
                if (id === 2) {
                    templates[1].aboutCompany(id)
                }
                break
            case 3:
                if (id === 3) {
                    templates[2].design(id)
                }
                break
            case 4:
                if (id === 4){
                    templates[3].preferences(id)
                }
                break
            case 5:
                if (id === 5) {
                    templates[4].feedBack(id)
                }
        }
    }
}
briefing.init()