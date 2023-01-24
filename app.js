let points = 0


// quiz 1

const nextButton = document.getElementById("next-button")
const nameInput = document.getElementById("name")
const quizContainer = document.querySelector('.quiz-container-complete')
const quizAlert = document.querySelector('.quiz-alert')
const nextQuiz = document.querySelector('.quiz-blocked')

nextButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameInput.value == "") {
        quizAlert.innerHTML = '<h3 style="color: #fff; margin-top: 15px; letter-spacing: 1px;"><b>Debes escribir tu nombre para continuar</b></h3>'
    } else {
        quizContainer.classList.add('quiz-container-complete_active')
        nextQuiz.classList.add('quiz-blocked_disable')
    }

})



// quiz 2

const radioinput1 = document.getElementById("quiz2-radio-input1")
const radioinput2 = document.getElementById("quiz2-radio-input2")
const nextButton2 = document.getElementById("next-button2")
const quizContainer2 = document.querySelector(".quiz2-container-complete")
const quizAlert2 = document.querySelector(".quiz-alert2")
const nextQuiz3 = document.querySelector('.quiz-blocked3')
const errContainer2 = document.querySelector('.quiz2-container-err')

nextButton2.addEventListener('click', (e) => {
    e.preventDefault()

    if(radioinput1.checked == false && radioinput2.checked == false) {
        quizAlert2.innerHTML = '<h3 style="color: #fff; margin-top: 15px; letter-spacing: 1px;"><b>Debes elegir una opción</b></h3>'
    } else if(radioinput1.checked == true){
        quizContainer2.classList.add('quiz2-container-complete_active')
        nextQuiz3.classList.add('quiz-blocked3_disable')
        points = points + 1
    } else if(radioinput2.checked == true) {
        errContainer2.classList.add('quiz2-container-err_active')
        nextQuiz3.classList.add('quiz-blocked3_disable')
    }
})

// quiz 3

const manButton = document.getElementById('quiz3-man-btn')
const catwomanBtn = document.getElementById('quiz3-woman-btn')
const quizContainer3 = document.querySelector('.quiz3-container-complete')
const nextQuiz4 = document.querySelector('.quiz-blocked4')
const errContainer3 = document.querySelector('.quiz3-container-err')

manButton.addEventListener('click', () => {
    quizContainer3.classList.add('quiz3-container-complete_active')
    nextQuiz4.classList.add('quiz-blocked4_disable')
    points = points + 1
})
catwomanBtn.addEventListener('click', () => {
    errContainer3.classList.add('quiz3-container-err_active')
    nextQuiz4.classList.add('quiz-blocked4_disable')
})

// quiz 4

const radioinput14 = document.getElementById("quiz4-radio-input1")
const radioinput24 = document.getElementById("quiz4-radio-input2")
const nextButton4 = document.getElementById("next-button4")
const quizContainer4 = document.querySelector(".quiz4-container-complete")
const quizAlert4 = document.querySelector(".quiz-alert4")
const nextQuiz5 = document.querySelector('.quiz-blocked5')
const errContainer4 = document.querySelector('.quiz4-container-err')

nextButton4.addEventListener('click', (e) => {
    e.preventDefault()

    if(radioinput14.checked == false && radioinput24.checked == false) {
        quizAlert4.innerHTML = '<h3 style="color: #fff; margin-top: 15px; letter-spacing: 1px;"><b>Debes elegir una opción</b></h3>'
    } else if(radioinput24.checked == true){
        quizContainer4.classList.add('quiz4-container-complete_active')
        nextQuiz5.classList.add('quiz-blocked5_disable')
        points = points + 1
    } else if(radioinput14.checked == true){
        errContainer4.classList.add('quiz4-container-err_active')
        nextQuiz5.classList.add('quiz-blocked5_disable')
    }
})

// quiz 5

const radioinput15 = document.getElementById("quiz5-radio-input1")
const radioinput25 = document.getElementById("quiz5-radio-input2")
const nextButton5 = document.getElementById("next-button5")
const quizContainer5 = document.querySelector(".quiz5-container-complete")
const quizAlert5 = document.querySelector(".quiz-alert5")
const errContainer5 = document.querySelector('.quiz5-container-err')
const resultContainer = document.querySelector('.res-container')

nextButton5.addEventListener('click', (e) => {
    e.preventDefault()

    if(radioinput15.checked == false && radioinput25.checked == false) {
        quizAlert5.innerHTML = '<h3 style="color: #fff; margin-top: 15px; letter-spacing: 1px;"><b>Debes elegir una opción</b></h3>'
    } else if(radioinput15.checked == true) {
        points = points + 1
        quizContainer5.classList.add('quiz5-container-complete_active')
        resultContainer.classList.add('active')
        resultContainer.innerHTML = `<div class="quiz-result">
        <h1>${nameInput.value} Obtuviste:</h1>
        <p>¡${points} puntos!</p>
        <h2>Compartir Resultado en:</h2>
        <div class="share-socialmedia">
            <a href="https://api.whatsapp.com/send?text=Hola!%20${nameInput.value}%20hizo%20el%20Batman%20Fan%20Test%20y%20su%20resultado%20fue%20de%20¡${points}%20puntos!,%20prueba%20el%20test%20aqui:%20${window.location.href}" target:"_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
        </div>
    </div>`
    } else if(radioinput25.checked == true) {
        errContainer5.classList.add('quiz5-container-err_active')
        resultContainer.classList.add('active')
        resultContainer.innerHTML = `<div class="quiz-result">
        <h1>${nameInput.value} Obtuviste:</h1>
        <p>¡${points} puntos!</p>
        <h2>Compartir Resultado en:</h2>
        <div class="share-socialmedia">
            <a href="https://api.whatsapp.com/send?text=Hola!%20${nameInput.value}%20hizo%20el%20Batman%20Fan%20Test%20y%20su%20resultado%20fue%20de%20¡${points}%20puntos!,%20prueba%20el%20test%20aqui:%20${window.location.href}" target:"_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
        </div>
        </div>`
    }
})