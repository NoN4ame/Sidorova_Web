let container = document.getElementById('form')
let input = container.getElementsByTagName('input')
let answer = []
let regexp_text = /^[a-zа-яё0-9]+/i,
    regexp_phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,17}$/,
    regexp_email = /^.+@.+\..+$/im;

//let nextBtn = document.getElementById('next')
//let nextButton =  document.getElementById('next')
const answers = function (id) {
    switch (id) {
        case 1:
            if (id === 1) {
                question[id].answers = {
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
                question[id].answers = {
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
                question[id].answers = {
                    corporateIdentity: input[0].value,
                    logo: input[1].value,
                    yourMaterials: input[2].value,
                    colors: input[3].value,
                    siteAppearance: input[4].value,
                    mainSections: `${document.getElementById('mainSections').value}`,
                    adaptive: input[6].value
                }
            }
            break
        case 4:
            if (id === 4) {
                question[id].answers = {
                    // Блоке что нравится
                    link_one: input[0].value,
                    link_two: input[1].value,
                    link_three: input[2].value,
                    what_likeOne: input[3].value,
                    what_likeTwo: input[4].value,
                    what_likeThree: input[5].value,
                    // Блок что не нравится
                    link_dontLikeOne: input[6].value,
                    link_dontLikeTwo: input[7].value,
                    link_dontLikeThree: input[8].value,
                    what_dontLikeOne: input[9].value,
                    what_dontLikeTwo: input[10].value,
                    what_dontLikeThree: input[11].value
                }
            }
            break
        case 5:
            if (id === 5) {
                question[id].answers = {
                    name: input[0].value,
                    phone: input[1].value
                }
            }
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
        let not = false
        let textArea = document.getElementById('mainSections')
        if (e.target === document.getElementById('next')) {
            //Удаляем все классы ошибки в форме
            removeError()
            document.getElementById('next').classList.remove('disabled')
            for (let i = 0; i < input.length; i++) {
                // Если поле не пустое удаляем класс ошибки
                if (input[i].value && regexp_text.test(input[i].value)) {
                    input[i].classList.remove('notValid')
                    // Проверка правильности ввода номера телефона
                    if (input[i].classList.contains('phone') && regexp_phone.test(input[i].value)) {
                        input[i].classList.remove('notValid')
                        // Если класс есть, но номер написан не правильно, выводим текст ошибки
                    } else if (input[i].classList.contains('phone')) {
                        input[i].classList.add('notValid')
                        errorMsg(input[i], `Введите номер формата 7-000-000-00-00`)
                        // Проверка email
                    } else if (input[i].classList.contains('email') && regexp_email.test(input[i].value)) {
                        input[i].classList.remove('notValid')
                        // Если класс email есть, но введен не правильно, выводим текст ошибки
                    } else if (input[i].classList.contains('email') && regexp_email.test(input[i].value) !== true) {
                        input[i].classList.add('notValid')
                        errorMsg(input[i], `Введите email в формате check@example.com`)
                    }
                    // Если поле пустой и оно не обязательно для заполнения, удаляем ошибку
                } else if (!input[i].value && input[i].classList.contains('optional')) {
                    input[i].classList.remove('notValid')
                    // Если поле пустое, выводим текст ошибки
                } else if (!input[i].value) {
                    document.getElementById('next').classList.add('disabled')
                    input[i].classList.add('notValid')
                    errorMsg(input[i], 'Обязательное поле для заполнения')
                    not = true
                }
            }
            if (textArea) {
                if (!textArea.value) {
                    textArea.classList.add('notValid')
                    errorMsg(textArea, 'Обязательное поле для заполнения')
                    not = true
                } else if (textArea.value) {
                    textArea.classList.remove('notValid')
                }
            }
            if (!not) {
                document.getElementById('next').classList.remove('disabled')
                answers(id)
                briefing.nextPage(id)
                renderAnswers()
            }
        } else if (e.target === document.getElementById('back')) {
            answers(id)
            briefing.backPage(id)
            renderAnswers()
        } else if (e.target === document.getElementById('submit')) {
            for (let answers in question) {
                answer.push(question[answers].answers)
            }
            answer.push(new Object({
                name: input[0].value,
                contacts: input[1].value
            }))
            const hasVal = obj => {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) return true
                }
                return false
            }
            const filtered = answer.filter(el => hasVal(el))
            answer = filtered
        }
    })
}
//const submitBrif = function () {
//    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
//    let modularWindow = `<div class="shadow">
//                            <div class="modul">
//                            <p>Спасибо за подробное заполнения брифа.<br>
//                            Сразу же после ознакомления я свяжусь с вами.</p>
//                            <button>Хорошего дня!</button>
//                            </div>
//                        </div>`
//    document.querySelector('.briefing').insertAdjacentHTML('beforebegin', modularWindow)
//    let containers = document.querySelectorAll('.container')
//    let banner = document.querySelectorAll('.banner')
//    containers.forEach(el => {
//        el.style.filter = 'brightness(0.5)'
//    })
//    banner.forEach(el => {
//        el.style.filter = 'brightness(0.5)'
//    })
//}
// Рендер ответов после перехода между страницами брифинга
const renderAnswers = () => {
    for (let i = 0; i < input.length; i++) {
        let id = parseInt(document.getElementById('currentId').textContent)
        for (let answer in question[id].answers) {
            let value = question[id].answers[answer]
            if (input[i].id === answer || input[i].className === answer) {
                input[i].value = value
            } else if (document.getElementById('mainSections')) {
                if (document.getElementById('mainSections').id === answer) {
                    document.getElementById('mainSections').value = value
                }
            }
        }
    }
}

validation()