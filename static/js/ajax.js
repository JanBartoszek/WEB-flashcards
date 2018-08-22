let ajax = {
    sendQuestion : function() {
        let new_question = localStorage.getItem('new-question')
        let ajax = new XMLHttpRequest
        ajax.open('POST', '/create_question', true)
        ajax.setRequestHeader("Content-type", "application/json")
        ajax.send(new_question)
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                    alert(JSON.parse(this.responseText));
            }
        }
        },

        getData: function() {
            let data = new XMLHttpRequest
            data.open("GET", '/get_data', true)
            data.send()
            data.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let response = JSON.parse(this.responseText)
                    document.getElementById('question-div').innerHTML = response.question
                    document.getElementById('answer-div').innerHTML = response.answer

                }
        }
        }

}
