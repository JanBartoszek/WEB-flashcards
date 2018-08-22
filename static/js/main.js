let mainDOM = {
    createElements : function() {
        let mainContainer = document.createElement('div')
        mainContainer.setAttribute('class', 'container')
        mainContainer.setAttribute('id', 'main-container')
        document.body.appendChild(mainContainer)
        this.createWelcomeSign()
        this.createCreateQuestionButton()
        this.createAnswerQuestionButton()

    },

    createWelcomeSign : function() {
        let welcomeSign = document.createElement('img')
        welcomeSign.setAttribute('src', 'https://78.media.tumblr.com/fe4c781d67e7eb3ac50f42a3794182d4/tumblr_ml5jbpjzmx1s5jjtzo1_400.gif')
        welcomeSign.setAttribute('alt', 'Welcome sign')
        welcomeSign.setAttribute('id', 'welcome-sign')
        document.getElementById('main-container').appendChild(welcomeSign)
    },

    createCreateQuestionButton : function() {
        let createQuestionButton = document.createElement('button')
        createQuestionButton.setAttribute('class', 'button')
        createQuestionButton.setAttribute('id', 'create-question-button')
        createQuestionButton.setAttribute('type', 'button')
        document.getElementById('main-container').appendChild(createQuestionButton)
        document.getElementById('create-question-button').innerHTML = 'Create question'
        document.getElementById('create-question-button').addEventListener('click', mainEvents.loadCreateQuestion)

    },
    createAnswerQuestionButton : function() {
        let answerQuestionButton = document.createElement('button')
        answerQuestionButton.setAttribute('class', 'button')
        answerQuestionButton.setAttribute('id', 'answer-question-button')
        answerQuestionButton.setAttribute('type', 'button')
        document.getElementById('main-container').appendChild(answerQuestionButton)
        document.getElementById('answer-question-button').innerHTML = 'Answer question'
        document.getElementById('answer-question-button').addEventListener('click', mainEvents.loadAnswerQuestion)

    },

    removeMainDOMContent : function() {
        let mainDOM = document.getElementById('main-container')
        mainDOM.parentNode.removeChild(mainDOM)
    }
}

let mainEvents = {
    loadCreateQuestion : function() {
        mainDOM.removeMainDOMContent()
        createQuestionDOM.createElements()

    },

    loadAnswerQuestion : function() {
        mainDOM.removeMainDOMContent()
        answerQuestionDOM.createElements()
    }
}