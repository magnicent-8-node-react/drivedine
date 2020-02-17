const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
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

    User.findOne({ email: req.body.email }).then( user => {
        if(user) {
            return res.status(400).json({email: 'email already exists'});
        }

        const newUser = new User(body)

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash( newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;

                newUser
            .save()
            .then( () => {
                return res.status(201).json({
                    success: true,
                    id: newUser._id,
                    message: 'User Created!'
                })
            })
            .catch( error => {
                return res.status(400).json({
                    error,
                    message: 'User not created!'
                })
            })
            })
        })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if(!user) {
            return res.status(404).json({ success: false, emailNotFound: "email not found"})
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31554926
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
            } else{
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect"});
            }
        });
    });
};

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
    deleteUser,
    login,
    getUsers,
}