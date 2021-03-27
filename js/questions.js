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
        }
    }
]
const templates = [{
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
                    <input id="phone" type="number">
                    <label for="webSite">${questions[id].questions.webSite}</label>
                    <input id="webSite" type="text">
                    <label for="email">${questions[id].questions.email}</label>
                    <input id="email" type="text">
                    <label for="social">${questions[id].questions.socialNetworks}</label>
                    <input id="social" type="text">
                    <button id="next" class="btn">Далее</button>
                    <button id="back" class="btn">Назад</button>
                    <button id="test">тест</button>
                </div>
            </div>`
    },
    aboutCompany(id) {
        document.getElementById('form').innerHTML = `<div class="contact">
                <div class="briefing__header">
                    <h1 class="headers">${questions[id].header}</h1>
                    <span id="currentId">${questions[id].id}/5</span>
                </div>
                <div class="form__container">
                    <label for="companyName">${questions[id].questions.fieldOfActivity}</label>
                    <input id="companyName" type="text">
                    <label for="phone">${questions[id].questions.productsAndService}</label>
                    <input id="phone" type="number">
                    <label for="webSite">${questions[id].questions.targetAudience}</label>
                    <input id="webSite" type="text">
                    <label for="email">${questions[id].questions.customerNeeds}</label>
                    <input id="email" type="text">
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
                    <button id="next" class="btn">Далее</button>
                    <button id="back" class="btn">Назад</button>
                    <button id="test">тест</button>
                </div>
            </div>`
    }
}]