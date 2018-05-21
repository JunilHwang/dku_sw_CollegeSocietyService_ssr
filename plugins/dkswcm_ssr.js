import axios from 'axios'
import 'es6-promise/auto'
import moment from 'moment'

const restUrl = 'http://127.0.0.1:5000'
export default {
    getJsonData (url, fun) {
        url = `${restUrl}${url}`
        axios.get(url).then(fun)
    },
    postData (url, data, fun) {
        url = `${restUrl}${url}`
        axios.post(url, data).then(fun)
    },
    putData (url, data, fun) {
        url = `${restUrl}${url}`
        axios.put(url, data).then(fun)
    },
    deleteData (url, fun) {
        url = `${restUrl}${url}`
        axios.delete(url).then(fun)
    },
    getDateFormat (date) {
        const now = moment(date)
        return now.format('YYYY-MM-DD HH:mm:ss')
    }
}