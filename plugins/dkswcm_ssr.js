import axios from 'axios'
import 'es6-promise/auto'
import moment from 'moment'

const restUrl = 'http://220.149.235.59:5000'
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
    }
}