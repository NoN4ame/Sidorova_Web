const adaptive = {
    init() {
        this.tablet()
    },
    tablet() {
        let projectContainer = document.querySelector('.projects__content')
        if (document.body.clientWidth <= 1024) {
            document.querySelector('.projects__header').insertAdjacentHTML('beforeend',
                `<img id="slideNext" src="../img/slide.svg" alt="">`)
            projectContainer.style.position = 'relative'
            projectContainer.style.right = '0'
            //////////////////////////
            let slideArrow = document.getElementById('slideNext')
            slideArrow.addEventListener('click', function (e) {
                if (e.target === this && getComputedStyle(projectContainer).right === '0px') {
                    let slide = () => {
                        projectContainer.style.transition = 'right 0.4s'
                        projectContainer.style.right = '125px'
                        this.style.transform = 'rotate(-180deg)'
                    }
                    setTimeout(slide, 100)
                } else if (getComputedStyle(projectContainer).right === '125px') {
                    projectContainer.style.right = '0'
                    this.style.transform = 'rotate(0deg)'
                }
            })
        }
    }
}
adaptive.init()