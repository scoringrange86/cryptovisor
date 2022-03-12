import './EducationPage.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

// const getCourses = async (request, response) => { 
//     // fetch('http://localhost:5000/api/courses')
//     // .then(response =>
//     // {
//     //     // console.log(response.json())
//     //      return  response.json()
//     // })
//     // .then( (data) => {
//     //     // console.log(data)
//     //     //  setCourses(data);
//     //     response.send(data)
//     // })
//     // .catch(error => console.log(error))

//     try{
//         const d = await fetch('http://localhost:5000/api/courses')
//         const jsonData = await d.json()
//         console.log(jsonData)
//         response.send(jsonData)
//     }catch(error){
//         console.error(error);
//         // response.status(500).json({message: "Server Error"});
//     }
// }

function orderArticles (array) {
    const orderedArray = []
    var position = 1; 
    array.forEach(element => {
        const article = array.find(element => element.order == position)
        orderedArray.push(article)
        position++; 
    });
    return orderedArray
}

const EducationPage = () => {
    const [courses, setCourses] = useState( [])

    useEffect( () => {
        fetch('http://localhost:5000/api/courses').then(response =>
        {
             return  response.json()
        })
        .then( (data) => {
             setCourses(orderArticles(data));
        })
        .catch(error => console.log(error))        
    }
    , []
    )
   
    const topRow = courses.filter((courseTitle, index) => index < 3)
    const bottomRow = courses.filter((courseTitle, index) => index >= 3)

    return (
        <div className="courses-wrapper">
            <div className="courses-top-row-wrapper">
                {topRow.map((course) => (
                    <Link className="course-btn" key={course._id} to={
                        {
                            pathname: `/Education/${course.title}`,
                            state: {
                                title: course.title,
                                courseContent: course.courseContent,
                                id: course.id
                            }
                        }
                    }>
                        <div className="course-btn-wrapper">
                            <p>{course.title}</p>
                        </div>
                    </Link>
                )
                )
                }
            </div>
            <div className="courses-bottom-row-wrapper">
                {bottomRow.map((course) => (
                    <Link className="course-btn"  key={course._id} to={
                        {
                            pathname: `/Education/${course.title}`,
                            state: {
                                title: course.title,
                                courseContent: course.courseContent,
                                id: course.id
                            }
                        }
                    }>
                        <div className="course-btn-wrapper">
                            <p>{course.title}</p>
                        </div>
                    </Link>
                )
                )
                }
            </div>
        </div>
    )
}

export default EducationPage