'use strict'
 const briefing = {
    init() {
    this.aboutBriefing()
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
        })
     },
     showPopUp(){
         document.querySelector('.about-briefing__popUp').classList.add('popUpActive')
     },
     closePopUp(){
        document.querySelector('.closePopUp').addEventListener('click', function (e){
            //console.log(this)
            console.log(e.target)
            if (e.target === this) {
                setTimeout(function (){
                    document.querySelector('.about-briefing__popUp').classList.remove('popUpActive')
                }, 100)
                setTimeout(function (){
                    document.querySelector('.about-briefing__popUp').remove()
                }, 300)
            }
        })
     }
 }
 briefing.init()