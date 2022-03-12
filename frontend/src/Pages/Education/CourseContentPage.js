import "./CourseContentPage.css"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const CourseContentPage = () => {
    
    const location = useLocation()
    const { title, courseContent, id} = location.state
    
    return (
        <div className="course-contents-wrapper">
            <div className="course-content-title">
                            <h2> {title}</h2>
                        </div>
            {
                courseContent.map((course) => (
                        <Link className="course-content-btn" to={`/Education/${title}/${course}`}>
                            <div className="course-btn-wrapper">
                                <p>{course}</p>
                            </div>
                        </Link>
                )
                )
            }
        </div>
    )
}

export default CourseContentPage