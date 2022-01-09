require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteAndCount('61d89455a79252438ebf1e42').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e);
})