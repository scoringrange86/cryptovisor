//
//      Accesses DB to return requested data
//

import Course from "../models/course.js";

const getAllCourses = async (request, response) =>{

    try{
        const courses = await Course.find({});

        response.send(courses);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

export default getAllCourses 