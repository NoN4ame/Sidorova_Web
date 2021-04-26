const adaptive = {
    init() {
        this.tablet()
    },
    // Версия для планшета
    tablet() {
        let projectContainer = document.querySelector('.projects__content')
        if (document.body.clientWidth <= 1024) {
            // Добавление стрелки в блок "Портфолио", для прокрутки между работами
            document.querySelector('.projects__header').insertAdjacentHTML('beforeend',
                `<img id="slideNext" src="img/slide.svg" alt="">`)
            projectContainer.style.position = 'relative'
            projectContainer.style.right = '0'
            let slideArrow = document.getElementById('slideNext')
            slideArrow.addEventListener('click', function (e) {
                // Расчет расстояния от правого края при слайде в проектах
                // (125 это расстояние необходимое чтоб показать полностью правый блок проектов при разрешение 1024px)
                let right = 125 - (document.body.clientWidth - 1024)
                if (e.target === this && getComputedStyle(projectContainer).right === '0px') {
                    let slide = () => {
                        projectContainer.style.transition = 'right 0.4s'
                        projectContainer.style.right = `${right}px`
                        this.style.transform = 'rotate(-180deg)'
                    }
                    setTimeout(slide, 100)
                } else if (getComputedStyle(projectContainer).right === `${right}px`) {
                    projectContainer.style.right = '0'
                    this.style.transform = 'rotate(0deg)'
                }
            })
        }
    }
}
adaptive.init()
