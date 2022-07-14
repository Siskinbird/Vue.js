Vue.component('click-counter', {
    template: '<button @click="count++">Click me {{count}}</button>',
    data () {
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#components'
})