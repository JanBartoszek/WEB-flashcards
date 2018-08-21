let createQuestionDOM = {
    createElements : function() {
    let createQuestionContainer = document.createElement('div')
    createQuestionContainer.setAttribute('class', 'container')
    createQuestionContainer.setAttribute('id', 'create-question-container')
    document.body.appendChild(createQuestionContainer)
    this.createQuestionInput()
    this.createAnswerInput()
    this.createSubmittingButton()
    this.createBackButton()
    },

    createQuestionInput : function() {
        let question = document.createElement('input')
        question.setAttribute('type', 'text')
        question.setAttribute('placeholder', 'Question itself...')
        question.setAttribute('id', 'create-question-question')
        document.getElementById('create-question-container').appendChild(question)
    },
    
    createAnswerInput : function() {
        let answer = document.createElement('textarea')
        answer.setAttribute('type', 'text')
        answer.setAttribute('placeholder', 'Correct answer...')
        answer.setAttribute('rows', '4')
        answer.setAttribute('cols', '50')
        answer.setAttribute('id', 'create-question-answer')
        document.getElementById('create-question-container').appendChild(answer)
    },

    createSubmittingButton : function() {
        let button = document.createElement('button')
        button.setAttribute('id', 'create-question-button')
        document.getElementById('create-question-container').appendChild(button)
        document.getElementById('create-question-button').innerHTML = 'Submit your question'
        document.getElementById('create-question-button').addEventListener('click', createQuestionEvents.getInput)
    },

    createBackButton : function() {
        let button = document.createElement('button')
        button.setAttribute('id', 'create-question-back-button')
        document.getElementById('create-question-container').appendChild(button)
        document.getElementById('create-question-back-button').innerHTML = 'Back to main page'
        document.getElementById('create-question-back-button').addEventListener('click', createQuestionEvents.loadMain)
    },

    removeCreateQuestionDOMContent : function() {
        let createQuestionDOM = document.getElementById('create-question-container')
        createQuestionDOM.parentNode.removeChild(createQuestionDOM)
    }

}

let createQuestionEvents = {

    getInput: function(){
    let question = document.getElementById("create-question-question").value;
    let answer = document.getElementById("create-question-answer").value;
    let createQuestionInput = { question : question, answer : answer };
    console.log(createQuestionInput)
    return createQuestionInput;
    },

    loadMain : function() {
        createQuestionDOM.removeCreateQuestionDOMContent();
        mainDOM.createElements();
    }

}