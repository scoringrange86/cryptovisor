//
//      Accesses DB to return requested data
//

import User from "../models/user.js";

const getAllUsers = async (request, response) =>{

    try{
        const users = await User.find({});

        response.json(users);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

export const getUserByName = async (request, response) =>{

    try{
        const user = await User.find({name: request.params.name });

        response.json(user);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
    
}


export default getAllUsers 