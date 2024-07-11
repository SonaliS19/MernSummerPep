const UserModel = require("../model/userModel");

//Type to find existingUsers

// const findExistingUserUsingEmail = async (email)=>{
//   const user = await UserModel.findOne({email});
//   return user;
// }


const signUp = async (req, res) => {
  // console.log(req.body);
  // res.send("in progress...");

  try{
    const{ email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({
        status: "fail",
        message: "email and passwor id require",

      });
      return;
    }

        // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if (!EMAIL_REGEX.test(email)) {
        //     res.status(400).json({
        //         status: "fail",
        //         message: "Invalid Email",
        //     });
        //     return;
        // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "user created",
    })


  }
  catch(err){
    // res.status(500);
    if(err.code== "11000"){
      res.status(400).json({
        status: "fail",
        message: "Invalid email or password"
        });
        return;

    }

    // console.log(Object.keys(err));

    res.status(500);
    res.json({
      status: "fail",
      message: "server error"
      });
   
  }

};

const login = async (req, res) => {};

module.exports = {
  signUp,
};