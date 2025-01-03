const User = require("../schema/userSchema");

class UserRepository{
    async createUser(userDetails){
        try {
            const newUser = await User.create(userDetails);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
    async findUser(parameters){
        const res = await User.findOne(parameters);
        return res;
    }
}

module.exports = UserRepository;