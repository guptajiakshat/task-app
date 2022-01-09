require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61d86ae0fad4e0a560f5dd66', 3).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e);
})