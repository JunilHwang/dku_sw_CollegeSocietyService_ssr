import Vue from 'vue'
import axios from 'axios'
import 'es6-promise/auto'
import moment from 'moment'
//import VueFroala from 'vue-froala-wysiwyg'
//import 'froala-editor/js/froala_editor.pkgd.min.js'


Vue.config.productionTip = false
const restUrl = 'http://220.149.235.59:5000'

Vue.prototype.$http = axios
//Vue.use(VueFroala)
Vue.mixin({
    methods: {
        getJsonData (url, fun) {
            url = `${restUrl}${url}`
            this.$http.get(url).then(fun)
        },
        postData (url, data, fun) {
            url = `${restUrl}${url}`
            this.$http.post(url, data).then(fun)
        },
        putData (url, data, fun) {
            url = `${restUrl}${url}`
            this.$http.put(url, data).then(fun)
        },
        deleteData (url, fun) {
            url = `${restUrl}${url}`
            this.$http.delete(url).then(fun)
        },
        setCategory (index) {
            this.$store.commit('activeCategory', index)
        },
        getDateFormat (date) {
            const now = moment()
            const newDate = moment(date)
            let formatString = 'YYYY/MM/DD HH:mm';
            if (now.format('YYYY') === newDate.format('YYYY')) {
                formatString = 'MM/DD HH:mm'
                if (now.format('YYYY/MM/DD') === newDate.format('YYYY/MM/DD')) {
                    formatString = 'HH:mm'
                }
            }
            return newDate.format(formatString)
        },
        serialize (target) {
            return $(target).serialize()
        }
    },
    mounted () {
        if ($('[autofocus]').length) {
            $('[autofocus]').focus()
        }
    }
})


$(document)
    .on('click', 'a[href="#"]', function () { return false })
    .on('submit', 'form', function () { return false })
