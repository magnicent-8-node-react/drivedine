const User = require('../models/User');

createUser = (req, res) => {
    const body = req.body
    console.log(body)
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        })
    }

    const user = new User(body)

    if(!user){
        return res.status(400).json({success: false, error: err })
    }

    user
        .save()
        .then( () => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User Created!'
            })
        })
        .catch( error => {
            return res.status(400).json({
                error,
                message: 'User not created!'
            })
        })
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUsers,
}