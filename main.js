let watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Until you ask a question, I can not answer!'
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to finish typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if(this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually end with a question mark. ;-)'
                return
            }
            this.answer = 'Think...'
            let vm = this
            axios.get('https://yesno.wtf/api').then(function(response) {
                vm.answer = _.capitalize(response.data.answer)
            }).catch(function (error) {
                vm.answer = 'Error! Can not contact API. ' + error 
            })
        }
    }
})

new Vue({
    el: '#app',
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(responce => this.info = responce.data.bpi)
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }
});