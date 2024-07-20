const UserModel = require("../model/userModel");
//REQUIRING JWT
const jwt = require("jsonwebtoken");

//Type to find existingUsers

const findExistingUserByEmail = async (email)=>{
  const user = await UserModel.findOne({email});
  return user;
}

//varify password after user verify during login
const varifyPassword = async(plainPassword, hashedPassword) =>{
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

//JWT AUTHENTICATION--------------------------------------------------------------------------------
const generateJWToken = (user) => {
  const token = jwt.sign({
    exp:120,
    data:{
      userid: user._id,
      email: user.email,
    }
   
  },
  process.env.JWT_SECRET_KEY
);
  return token;
};

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


//LOGIN API

const login = async (req, res) => {
    try{
      const {email, password} = req.body;
      if(!email || !password){
        res.status(400).json({
          status: "fail",
          message: "invalid email or password"
          });
          return;
          }

          const user = await findExistingUserByEmail(email);
          if(!user){
            res.status(400).json({
              status: "fail",
              message: "User not found"
              });
              return;
              }

          const hashedPassword = user.password;
          const isPassworCorrect = await varifyPassword(password, hashedPassword);
          if(!isPassworCorrect){
            res.status(400).json({
              status: "fail",
              message: "Invalid password"
              });
              return;
              }

              res.status(200).json({
                status: "success",
                message: "User logged in",
                data: {
                  user:{
                    name: user.name,
                    email: user.email,

                  }
                 

                },
                token: generateJWToken(user)
              })

    }
    catch(err){
      res.status(500).json({
        status: "fail",
        message: "server error"
      })
    }
};

module.exports = {
  signUp,
  login,
};

