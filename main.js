const Express = require('express')
const path = require('path')
const app = new Express()
const PORT = 3000

const createPath = (index) => path.resolve(__dirname, `${index}.html`)

app.listen(PORT, (error) => {
error ? console.log(error) : console.log(`listening my port ${PORT}`)
})

app.use(Express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.get('/posts', (req, res) => {
    res.sendFile(createPath('posts'))
})

app.get('/post', (req, res) => {
    res.sendFile(createPath('post'))
})

app.use((req, res,) => {
    res.status(404).sendFile(createPath('error'))
})



