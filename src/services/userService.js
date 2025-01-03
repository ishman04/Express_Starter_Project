const bcrypt = require('bcrypt')
class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }
    async signUp(userDetails){
        const user = await this.userRepository.findUser({
            email: userDetails.email
        })
        if (user) {
            throw { reason: "User already exists", statusCode: 400 };
        }
        
        const hashedPassword = await bcrypt.hash(userDetails.password, 10);

        const newUser = await this.userRepository.createUser({
            email: userDetails.email,
            name: userDetails.name,
            password: hashedPassword
        });
        if (!newUser) {
            throw { reason: "Failed to create user", statusCode: 500 };
        }
        return newUser;
    }
}

module.exports = UserService;