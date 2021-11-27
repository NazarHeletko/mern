const HttpError = require('../error/http-error')
const User = require('../models/User.model')


async function getUsersController (req, res, next) {
    try{
        const allUsers =await User.find()
        res.status(200).json(allUsers)
    }
    catch(err){
        return next(new HttpError('При запиті користувачів, щось пішло не так', 500))
    }
}

async function deleteUserController (req, res, next) {
    try {
        await User.deleteOne({_id: req.body.id})
        res.status(200).json({success: 1})
    }
    catch(err){
        return next(new HttpError('Не вдалося видалити користувача', 500))
    }
}

module.exports = {getUsersController, deleteUserController}