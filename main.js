let app = new Vue({
    el: '#app',
    data: {
        message: "Hello VUE"
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        message: "Page load at" + new Date().toLocaleString()
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