const questions = [
    {},
    {
        id: 1,
        header: "Контактная информация",
        questions: {
            companyName: "1. Название компании",
            phoneNumber: "2. Телефон",
            webSite: "3. Сайт (если требуется редизайн уже существующего сайта)",
            email: "4. E-mail",
            socialNetworks: "5. Соцсети"
        },
        answers: {}
    },
    {
        id: 2,
        header: "О компании",
        questions: {
            fieldOfActivity: "1. Сфера деятельности",
            productsAndService: "2. Товары и услуги",
            targetAudience: "3. Целевая аудитория. Кто ваш клиент?",
            customerNeeds: "4. Потребности вашего клиента",
            whatIsRegion: "5. С какими регионами работает компания?",
            stagesOfWork: "6. Этапы работы с вами/Схема взаимодействия с клиентом",
            competitors: "7. Ваши основные конкуренты и их сайты",
            discount: "8. Информация о распродажах и скидках",
            prohibitedMaterials: "9. Будут ли использоваться материалы запрещенные законодательством РФ, а\n" +
                "также, оскорбляющие религиозные, национальные, моральные-этические ценности человека?"
        },
        answers: {}
    },
    {
        id: 3,
        header: "Оформление",
        questions: {
            corporateIdentity: "1. Есть ли фирменный стиль?",
            logo: "2. Есть ли логотип/слоган?",
            yourMaterials: "3. Какие графические и текстовые материалы вы можете предоставить для использования на сайте?",
            colors: "4. Есть ли у Вас особые  предпочтения в отношении цветовой гаммы сайта?",
            siteAppearance: "5. Как бы вы охарактеризовали внешний вид будущего сайта?",
            mainSections: "6. Основные разделы сайта",
            adaptive: "7. Адаптировать под мобильные устройства и планшеты?",
            more: "8. Дополнительные пожелания (в свободной форме)"
        },
        answers: {}
    },
    {
        id: 4,
        header: "Вкусовые предпочтения",
        questions: {
            linksForSiteWhatYouLike: "1. Оставьте ссылки на сайты, которые вам нравятся",
            linksFroSiteWhatYouDontLike: "2. Оставьте ссылки на сайты, которые вам НЕ нравятся"

        },
        answers: {}
    },
    {
        id: 5,
        header: "удобный способ связи с вами",
        questions: {
            name: "1. Как к вам обращаться?",
            phone: "2. Контакты"
        }
    }
]
const templates = [
    {
        contacts(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                    <label for="companyName">${questions[id].questions.companyName}</label>
                    <input id="companyName" type="text">
                    <label for="phone">${questions[id].questions.phoneNumber}</label>
                    <input onkeydown="return event.keyCode !== 69" id="phone" type="number">
                    <label for="webSite">${questions[id].questions.webSite}</label>
                    <input id="webSite" type="text">
                    <label for="email">${questions[id].questions.email}</label>
                    <input id="email" type="text">
                    <label for="social">${questions[id].questions.socialNetworks}</label>
                    <input id="social" type="text">
                    <button id="next" class="btn">Далее</button>
                </div>
            </div>`
        }
    },
    {
        aboutCompany(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                    <label for="fieldOfActivity">${questions[id].questions.fieldOfActivity}</label>
                    <input id="fieldOfActivity" type="text">
                    <label for="productsAndService">${questions[id].questions.productsAndService}</label>
                    <input id="productsAndService" type="text">
                    <label for="targetAudience">${questions[id].questions.targetAudience}</label>
                    <input id="targetAudience" type="text">
                    <label for="customerNeeds">${questions[id].questions.customerNeeds}</label>
                    <input id="customerNeeds" type="text">
                    <label for="whatIsRegion">${questions[id].questions.whatIsRegion}</label>
                    <input id="whatIsRegion" type="text">
                    <label for="stagesOfWork">${questions[id].questions.stagesOfWork}</label>
                    <input id="stagesOfWork" type="text">
                    <label for="competitors">${questions[id].questions.competitors}</label>
                    <input id="competitors" type="text">
                    <label for="discount">${questions[id].questions.discount}</label>
                    <input id="discount" type="text">
                    <label for="prohibitedMaterials">${questions[id].questions.prohibitedMaterials}</label>
                    <input id="prohibitedMaterials" type="text">
                    <div class="form__buttons">
                        <button id="back" class="btn">Назад</button>
                        <button id="next" class="btn">Далее</button>
                    </div>
                </div>
            </div>`
        }
    },
    {
        design(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                    <label for="corporateIdentity">${questions[id].questions.corporateIdentity}</label>
                    <input id="corporateIdentity" type="text">
                    <label for="logo">${questions[id].questions.logo}</label>
                    <input id="logo" type="text">
                    <label for="yourMaterials">${questions[id].questions.yourMaterials}</label>
                    <input id="yourMaterials" type="text">
                    <label for="colors">${questions[id].questions.colors}</label>
                    <input id="colors" type="text">
                    <label for="siteAppearance">${questions[id].questions.siteAppearance}</label>
                    <input id="siteAppearance" type="text">
                    <label for="mainSections">${questions[id].questions.mainSections}</label>
                    <textarea name="mainSections" id="mainSections" cols="30" rows="13"></textarea>
                    <label for="adaptive">${questions[id].questions.adaptive}</label>
                    <input id="adaptive" type="text">
                    <label for="more">${questions[id].questions.more}</label>
                    <input id="more" type="text">
                    <div class="form__buttons">
                        <button id="back" class="btn">Назад</button>
                        <button id="next" class="btn">Далее</button>
                    </div>
                </div>
            </div>`
        }
    },
    {
        preferences(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                <div class="linksForSiteWhatYouLike">
                    <label for="corporateIdentity">${questions[id].questions.linksForSiteWhatYouLike}</label>
                    <div class="briefing__links">
                        <ul id="corporateIdentity">
                            <li><p>Ссылки</p></li>
                            <li><input  type="text"></li>
                            <li><input type="text"></li>
                            <li><input type="text"></li>
                        </ul>
                        <ul>
                            <li><p>Что нравится?</p></li>
                            <li><input id="corporateIdentity" type="text"></li>
                            <li><input type="text"></li>
                            <li><input type="text"></li>
                        </ul>
                    </div>
                </div>
                <div>    
                    <label for="logo">${questions[id].questions.linksFroSiteWhatYouDontLike}</label>
                     <div class="briefing__links">
                        <ul id="linksFroSiteWhatYouDontLike">
                            <li><p>Ссылки</p></li>
                            <li><input type="text"></li>
                            <li><input type="text"></li>
                            <li><input type="text"></li>
                        </ul>
                        <ul>
                            <li><p>Что Не нравится?</p></li>
                            <li><input id="corporateIdentity" type="text"></li>
                            <li><input type="text"></li>
                            <li><input type="text"></li>
                        </ul>
                    </div>
                </div>
                    <div class="form__buttons">
                        <button id="back" class="btn">Назад</button>
                        <button id="next" class="btn">Далее</button>
                    </div>
                </div>
            </div>`
        }
    },
    {
        feedBack(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                    <label for="corporateIdentity">${questions[id].questions.name}</label>
                    <input id="corporateIdentity" type="text">
                    <label for="logo">${questions[id].questions.phone}</label>
                    <input onkeydown="return event.keyCode !== 69" id="logo" type="number">
                    <div class="form__buttons">
                        <button id="back" class="btn">Назад</button>
                        <button id="next" class="btn">Отправить бриф</button>
                    </div>
                </div>
            </div>`
        }
    }
]