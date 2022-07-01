let vm = new Vue({
    el: '#exemple',
    data: {
        message: 'Привет'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

let nvm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Dmitry',
        lastName: 'Chizhov'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
})



let app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: "Интересно"}, 
            {text: "Что из этого выйдет"},
            {text: "Выглядит довольно просто"},
            {text: "Думаю я справлюсь с этим дерьмом"}
        ]
    }
  })
  let app5 = new Vue({
    el: '#app-5',
    data: {
        messageRev: 'Вот это мы перевернули',
    },
    methods: {
        reverseMessage: function () {
            this.messageRev = this.messageRev.split('').reverse().join('')
        }
    }
  })
  let app6 = new Vue({
    el: '#app-6',
    data: {
        checkMessage: "Проверь меня сученька"
    }
  })

