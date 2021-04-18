const question = [
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
        header: "Удобный способ связи с вами",
        questions: {
            name: "1. Как к вам обращаться?",
            phone: "2. Контакты"
        },
        answers: {}
    }
]
// Шаблоны для брифинга
const templates = [
    {
        contacts(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${question[id].header}</h1>
                    <span id="currentId">${question[id].id}/4</span>
                </div>
                <div class="form__container">
                    <label for="companyName">${question[id].questions.companyName}</label>
                    <input id="companyName" type="text">
                    <label for="phone">${question[id].questions.phoneNumber}</label>
                    <input class="phone" id="phone" type="number">
                    <label for="webSite">${question[id].questions.webSite}</label>
                    <input class="optional" id="webSite" type="text">
                    <label for="email">${question[id].questions.email}</label>
                    <input class="email" id="email" type="text">
                    <label for="social">${question[id].questions.socialNetworks}</label>
                    <input id="social" type="text">
                    <button type="button" id="next" class="btn">Далее</button>
                </div>
            </div>`
        }
    },
    {
        aboutCompany(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${question[id].header}</h1>
                    <span id="currentId">${question[id].id}/4</span>
                </div>
                <div class="form__container">
                    <label for="fieldOfActivity">${question[id].questions.fieldOfActivity}</label>
                    <input id="fieldOfActivity" type="text">
                    <label for="productsAndService">${question[id].questions.productsAndService}</label>
                    <input id="productsAndService" type="text">
                    <label for="targetAudience">${question[id].questions.targetAudience}</label>
                    <input id="targetAudience" type="text">
                    <label for="customerNeeds">${question[id].questions.customerNeeds}</label>
                    <input id="customerNeeds" type="text">
                    <label for="whatIsRegion">${question[id].questions.whatIsRegion}</label>
                    <input id="whatIsRegion" type="text">
                    <label for="stagesOfWork">${question[id].questions.stagesOfWork}</label>
                    <input id="stagesOfWork" type="text">
                    <label for="competitors">${question[id].questions.competitors}</label>
                    <input id="competitors" type="text">
                    <label for="discount">${question[id].questions.discount}</label>
                    <input id="discount" type="text">
                    <label for="prohibitedMaterials">${question[id].questions.prohibitedMaterials}</label>
                    <input id="prohibitedMaterials" type="text">
                    <div class="form__buttons">
                        <button type="button" id="back" class="btn">Назад</button>
                        <button type="button" id="next" class="btn">Далее</button>
                    </div>
                </div>
            </div>`
        }
    },
    {
        design(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${question[id].header}</h1>
                    <span id="currentId">${question[id].id}/4</span>
                </div>
                <div class="form__container">
                    <label for="corporateIdentity">${question[id].questions.corporateIdentity}</label>
                    <input id="corporateIdentity" type="text">
                    <label for="logo">${question[id].questions.logo}</label>
                    <input id="logo" type="text">
                    <label for="yourMaterials">${question[id].questions.yourMaterials}</label>
                    <input id="yourMaterials" type="text">
                    <label for="colors">${question[id].questions.colors}</label>
                    <input id="colors" type="text">
                    <label for="siteAppearance">${question[id].questions.siteAppearance}</label>
                    <input id="siteAppearance" type="text">
                    <label for="mainSections">${question[id].questions.mainSections}</label>
                    <textarea name="mainSections" id="mainSections" cols="30" rows="13"></textarea>
                    <label for="adaptiveVersion">${question[id].questions.adaptive}</label>
                    <input id="adaptiveVersion" type="text">
                    <label for="more">${question[id].questions.more}</label>
                    <input class="optional" id="more" type="text">
                    <div class="form__buttons">
                        <button type="button" id="back" class="btn">Назад</button>
                        <button type="button" id="next" class="btn">Далее</button>
                    </div>
                </div>
            </div>`
        }
    },
    {
        feedBack(id) {
            document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${question[id].header}</h1>
                    <span id="currentId">${question[id].id}/4</span>
                </div>
                <div class="form__container">
                    <label for="name">${question[id].questions.name}</label>
                    <input id="name" type="text">
                    <label for="contacts">${question[id].questions.phone}</label>
                    <input id="contacts" type="text">
                    <div class="form__buttons">
                        <button type="button" id="back" class="btn">Назад</button>
                        <button type="submit" id="submit" class="btn">Отправить бриф</button>
                    </div>
                </div>
            </div>`
        }
    }
]