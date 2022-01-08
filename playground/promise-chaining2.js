require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndUpdate('61d8942aa79252438ebf1e40', { completed: true }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndDelete('61d8942aa79252438ebf1e40').then((res) => {
//     console.log(res)
//     return Task.countDocuments({ _id: '61d8942aa79252438ebf1e40' })
// }).then((cnt) => {
//     console.log(cnt)
// }).catch((e) => {
//     console.error(e);
// })

Task.countDocuments({ _id: '61d8942aa79252438ebf1e40' }).then((cnt) => {
    console.log(cnt)
}).catch((e) => {
    console.error(e);
})