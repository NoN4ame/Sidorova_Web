'use strict'
 const briefing = {
    init() {
    this.aboutBriefing()
    },
     aboutBriefing() {
        document.querySelector('.about-briefing').addEventListener('click', () =>{
            document.querySelector('.header__offer').insertAdjacentHTML('afterend',
                `<div class="about-briefing__popUp">
                      <p>Бриф — небольшая анкета между клиентом <br>
                        и исполнителем, в которой закрепляются<br>
                        важные параметры и данные для разработки<br>
                        сайта. Бриф по сути является техническим<br>
                        заданием. Именно благодаря ему становятся<br>
                        понятными исходные данные и<br>
                        предпочтения заказчика, что позволяет создать продукт,<br>
                        полностью отвечающий поставленным<br>
                        требованиям.
</p></div>`)
            setTimeout(this.test, 100)
        })
     },
     test(){
         document.querySelector('.about-briefing__popUp').classList.add('popUpActive')
     }
 }
 briefing.init()