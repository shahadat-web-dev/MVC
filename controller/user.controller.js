import User from "../models/user.model.js";


// Create User
const CreateUser = async (req, res) => {
  const data = req.body;
  const user = await User.create(data);
  res.json({
    message: "Create User Successfully",
    data: user
  });
};


// Get All User
const GetUser = async (req, res) => {
   const user = await User.find();
   res.json({
        message: "Get All User Successfully",
        data: user
    });
};


// Update User
const UpdateUser = async (req, res) =>{
const user = await User.findById(req.params.id);

    user.name = req.body.name;
    user.number = req.body.number;
    user.email = req.body.email;
    
    await user.save();

     res.json({
        message: "Update User Successfully",
        data: user
    });
};



const DeleteUser = async (req,res) => {
  await User.findByIdAndDelete(req.params.id);
   res.json({
        message: "Delete User Successfully"
    });
};



export default {
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser
}