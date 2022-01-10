const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    console.log(req.method, req.path)
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('listening on ' + port)
})
