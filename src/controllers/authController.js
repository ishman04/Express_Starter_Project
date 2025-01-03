const UserRepository = require("../repositories/userRepository");
const AuthService = require("../services/authService");

async function logout(req,res){
    console.log("Cookie from frontend", req.cookies)
    res.cookie("authToken","",{
        httpOnly: true,
        secure: false,
        maxAge: 7*24*60*60*1000
    })
    return res.status(200).json({
        success: true,
        message: "Logout successfull",
        error: {},
        data:{}
    })
}
async function logUserIn(req,res){
    const authService = new AuthService(new UserRepository());
    try {
        const result = await authService.login(req.body);

        res.cookie("authToken", result.token, { //creates a new cookie containing new jwt token on the browser
            httpOnly: true, //makes cookie unavailable to user (only stored in backend)
            secure: false,
            maxAge: 7*24*60*60*1000 //if we implement a refresh token mech then after out token expires in 1 hr a new token is automatically generated reducing chance of hacking and our token gets refreshed after every hour for 7 days enabling user to not login after every hour and he has to login after 7 days next time
        })
        return res.status(200).json({
            message: "Login Success",
            data: {
                userRole: result.userRole,
                userData: result.userData
            },
            error: {}
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message,
            data: {},
            error : error
        })
    }
}

module.exports = {
    logUserIn,
    logout
}