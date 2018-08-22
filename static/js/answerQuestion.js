let answerQuestionDOM = {
    createElements : function() {
    let answerQuestionContainer = document.createElement('div')
    answerQuestionContainer.setAttribute('class', 'container')
    answerQuestionContainer.setAttribute('id', 'answer-question-container')
    document.body.appendChild(answerQuestionContainer)
    this.createQuestionDiv()
    this.createAnswerDiv()
    this.createGetQuestionButton()
    this.createChangeColorButton()
    this.createBackButton()
    },

    createQuestionDiv : function() {
        let questionDiv = document.createElement('div')
        questionDiv.setAttribute('id', 'question-div')
        questionDiv.setAttribute('class', 'answerQuestion-div')
        document.getElementById('answer-question-container').appendChild(questionDiv)
    },
    
    createAnswerDiv : function() {
        let answerDiv = document.createElement('div')
        answerDiv.setAttribute('id', 'answer-div')
        answerDiv.setAttribute('class', 'answerQuestion-div')
        document.getElementById('answer-question-container').appendChild(answerDiv)
    },

    createGetQuestionButton : function() {
        let button = document.createElement('button')
        button.setAttribute('id', 'get-question-answer-button')
        document.getElementById('answer-question-container').appendChild(button)
        document.getElementById('get-question-answer-button').innerHTML = 'Shuffle...'
        document.getElementById('get-question-answer-button').addEventListener('click', answerQuestionEvents.getQuestion)
        // document.getElementById('create-question-button').addEventListener('click', createQuestionEvents.getInput)
    },

    createChangeColorButton : function() {
        let button = document.createElement('button')
        button.setAttribute('id', 'change-color-button')
        document.getElementById('answer-question-container').appendChild(button)
        document.getElementById('change-color-button').innerHTML = 'Reveal your answer...'
        document.getElementById('change-color-button').addEventListener('click', answerQuestionEvents.changeColor)
    },

    createBackButton : function() {
        let button = document.createElement('button')
        button.setAttribute('id', 'answer-question-back-button')
        document.getElementById('answer-question-container').appendChild(button)
        document.getElementById('answer-question-back-button').innerHTML = 'Back to main page'
        document.getElementById('answer-question-back-button').addEventListener('click', answerQuestionEvents.loadMain)
    },

    removeAnswerQuestionDOMContent : function() {
        let answerQuestionDOM = document.getElementById('answer-question-container')
        answerQuestionDOM.parentNode.removeChild(answerQuestionDOM)
    }

}


let answerQuestionEvents = {

    // getInput: function(){
    // let question = document.getElementById("create-question-question").value;
    // let answer = document.getElementById("create-question-answer").value;
    // let createQuestionInput = { question : question, answer : answer };
    // localStorage.setItem('new-question', JSON.stringify(createQuestionInput));
    // ajax.sendQuestion()
    // },

    loadMain : function() {
        answerQuestionDOM.removeAnswerQuestionDOMContent();
        mainDOM.createElements();
    },

    changeColor : function() {
        document.getElementById('answer-div').setAttribute('style', 'background-color : yellowgreen')
    },

    getQuestion : function() {
        document.getElementById('answer-div').setAttribute('style', 'background-color : black')
        ajax.getData()
    }



}