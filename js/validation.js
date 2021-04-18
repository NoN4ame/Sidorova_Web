let container = document.getElementById('form')
let input = container.getElementsByTagName('input')
let answer = []
let regexp_text = /^[a-zа-яё0-9]+/i,
    regexp_phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,17}$/,
    regexp_email = /^.+@.+\..+$/im;

// Функция для отрисовки ответов
const answers = function (id) {
    switch (id) {
        case 1:
            if (id === 1) {
                question[id - 1].answers = {
                    companyName: input[0].value,
                    phone: input[1].value,
                    webSite: input[2].value,
                    email: input[3].value,
                    social: input[4].value
                }
            }
            break
        case 2:
            if (id === 2) {
                question[id - 1].answers = {
                    fieldOfActivity: input[0].value,
                    productsAndService: input[1].value,
                    targetAudience: input[2].value,
                    customerNeeds: input[3].value,
                    whatIsRegion: input[4].value,
                    stagesOfWork: input[5].value,
                    competitors: input[6].value,
                    discount: input[7].value,
                    prohibitedMaterials: input[8].value
                }
            }
            break
        case 3:
            if (id === 3) {
                question[id - 1].answers = {
                    corporateIdentity: input[0].value,
                    logo: input[1].value,
                    yourMaterials: input[2].value,
                    colors: input[3].value,
                    siteAppearance: input[4].value,
                    mainSections: `${document.getElementById('mainSections').value}`,
                    adaptiveVersion: input[5].value,
                    more: input[6].value
                }
            }
            break
        case 4:
            if (id === 4) {
                question[id - 1].answers = {
                    name: input[0].value,
                    contacts: input[1].value
                }
            }
            break
    }
}
//Ф-ция удаление классов ошибки
const removeError = function () {
    let errors = document.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}
//Ф-ция по выводу сообщений об ошибке
//Принимает where - элемент которому добавляем ошибку
//text - текст ошибки
const errorMsg = (where, text) => {
    where.insertAdjacentHTML('afterend', `
            <div class="error">
            <p>${text}</p>
            </div>`)
}
const validation = function () {
    container.addEventListener('click', function (e) {
        e.preventDefault()
        let id = parseInt(document.getElementById('currentId').textContent)
        // Переменная которая указывает на валидность
        let notValid = false
        let textArea = document.getElementById('mainSections')
        if (e.target === document.getElementById('next')) {
            //Удаляем все классы ошибки в форме
            removeError()
            for (let i = 0; i < input.length; i++) {
                // Если поле не пустое удаляем класс ошибки и продолжаем проверку
                if (input[i].value && regexp_text.test(input[i].value)) {
                    input[i].classList.remove('notValid')
                    // Проверка правильности ввода номера телефона
                    if (input[i].classList.contains('phone') && regexp_phone.test(input[i].value)) {
                        input[i].classList.remove('notValid')
                    // Если класс есть, но номер написан не правильно, выводим текст ошибки
                    } else if (input[i].classList.contains('phone')) {
                        input[i].classList.add('notValid')
                        errorMsg(input[i], `Введите номер формата 7-000-000-00-00`)
                        notValid = true
                    // Проверка email
                    } else if (input[i].classList.contains('email') && regexp_email.test(input[i].value)) {
                        input[i].classList.remove('notValid')
                    // Если класс email есть, но введен не правильно, выводим текст ошибки
                    } else if (input[i].classList.contains('email') && regexp_email.test(input[i].value) !== true) {
                        input[i].classList.add('notValid')
                        errorMsg(input[i], `Введите email в формате check@example.com`)
                        notValid = true
                    }
                // Если поле пустой и оно не обязательно для заполнения, удаляем ошибку и
                } else if (!input[i].value && input[i].classList.contains('optional')) {
                    input[i].classList.remove('notValid')
                // Если поле пустое, выводим текст ошибки
                } else if (!input[i].value) {
                    input[i].classList.add('notValid')
                    errorMsg(input[i], 'Обязательное поле для заполнения')
                    notValid = true
                }
            }
            // Проверка заполненности textarea
            if (textArea) {
                if (!textArea.value) {
                    textArea.classList.add('notValid')
                    errorMsg(textArea, 'Обязательное поле для заполнения')
                    notValid = true
                } else if (textArea.value) {
                    textArea.classList.remove('notValid')
                }
            }
            // Если все поля заполнены то переходим на следующую страницу
            if (!notValid) {
                answers(id)
                briefing.nextPage(id)
                renderAnswers()
            }
        } else if (e.target === document.getElementById('back')) {
            // При клике, переходим на страницу назад и выводим ответы в заполненные поля
            answers(id)
            briefing.backPage(id)
            renderAnswers()
            // При клике на отправить бриф
        } else if (e.target === document.getElementById('submit')) {
            removeError()
            // Проверка полей ввода
            for (let i = 0; i < input.length; i++) {
                if (input[i].value !== "" && regexp_text.test(input[i].value)) {
                    input[i].classList.remove('notValid')
                } else if (!input[i].value) {
                    input[i].classList.add('notValid')
                    errorMsg(input[i], 'Обязательное поле для заполнения')
                    notValid = true
                }
            // Если все заполнено выводим модульное окно о то, что бриф заполнен
            } if (!notValid){
                submitBrif()
            }
            // Все полученные ответы из брифа добавляем в массив
            for (let answers in question) {
                answer.push(question[answers].answers)
            }
            // Добавление ответов с последней страницы брифа
            answer.push(new Object({
                name: input[0].value,
                contacts: input[1].value
            }))
            // Удаляем пустые объекты
            const hasVal = obj => {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) return true
                }
                return false
            }
            // Отфильтрованный массив
            const filtered = answer.filter(el => hasVal(el))
            answer = filtered
        }
    })
}
const submitBrif = function () {
    // Добавляем затемнение на задний фон
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    // Модульное окно
    let modularWindow = `<div class="shadow">
                            <div class="modul">
                            <img id="closePopUp" src="../img/close.svg" alt="">
                            <p>Спасибо за подробное заполнения брифа.<br>
                            Сразу же после ознакомления я свяжусь с вами.</p>
                            <button type="submit" id="submitBrif">Хорошего дня!</button>
                            </div>
                        </div>`
    document.getElementById('form').insertAdjacentHTML('beforeend', modularWindow)
    let containers = document.querySelectorAll('.container')
    let banner = document.querySelectorAll('.banner')
    // Добавляем стили для затемнение заднего фона
    containers.forEach(el => {
        el.classList.add('shadowContent')
    })
    document.querySelector('.briefing').querySelector('.container').style.filter = 'none'
    document.querySelector('.contact').classList.add('shadowContent')
    banner.forEach(el => {
        el.classList.add('shadowContent')
    })
    // Закрытие модульного окна
    document.querySelector('.shadow').addEventListener('click', function (e) {
        if(e.target === document.getElementById('closePopUp') || document.getElementById('submitBrif')){
            // Удаление модульного окна и затемненного заднего фона
            this.remove()
            document.body.style.backgroundColor = 'transparent'
            document.querySelectorAll('.shadowContent').forEach(el => {
                el.classList.remove('shadowContent')
            })
            // После закрытия окна, удаляем все полученные ответы и переходим на первую страницу брифа
            for (let answer in question){
                question[answer].answers = {}
            }
            templates[0].contacts(0)
        }
    })
}
// Рендер ответов после перехода между страницами брифинга
const renderAnswers = () => {
    for (let i = 0; i < input.length; i++) {
        // Получаем номер страницы брифа
        let id = parseInt(document.getElementById('currentId').textContent)
        // Перебираем объект и получаем название ключа
        for (let answer in question[id - 1].answers) {
            let value = question[id - 1].answers[answer]
            // Сравниваем id элемента и ключ объекта
            if (input[i].id === answer || input[i].className === answer) {
                // Присваиваем эл-ту полученное значение
                input[i].value = value
                // Сравнение для textarea
            } else if (document.getElementById('mainSections')) {
                if (document.getElementById('mainSections').id === answer) {
                    document.getElementById('mainSections').value = value
                }
            }
        }
    }
}

validation()