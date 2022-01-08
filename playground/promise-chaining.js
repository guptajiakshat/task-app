require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('61d86ae0fad4e0a560f5dd66', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.error(e);
})