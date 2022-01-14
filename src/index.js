const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')
const app = express()
const port = process.env.PORT || 3000



const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    // accept docs
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('please upload a word doc'))
        }
        cb(undefined, true)
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('listening on ' + port)
})
