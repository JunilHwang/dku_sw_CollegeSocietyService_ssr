const {
    Nuxt,
    Builder
} = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
const mysql = require('mysql')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

// mysql connect
const conn = mysql.createConnection({
    host: '220.149.235.59',
    user: 'root',
    password: '14959',
    database: 'dkswcm'
})

conn.connect()
// Add POST - /api/login
app.post('/api/login', (req, res) => {
    req.session.member = req.body.member
    res.json({
        ok: true
    })
})

// Add POST - /api/logout
app.get('/api/logout', (req, res) => {
    delete req.session.member
    res.json({
        ok: true
    })
})


// We instantiate Nuxt.js with the options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)
// No build in production
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')
