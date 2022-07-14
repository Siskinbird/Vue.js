Vue.component('click-counter', {
    template: '#click-counter-template',
    data () {
        return {
            count: 0
        }
    }
})

Vue.component('my-try', {
    template: '#my-test-component'
})

new Vue({
    el: '#components'
})