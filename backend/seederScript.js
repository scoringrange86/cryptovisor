//
//      Inserts data into DB
//

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js';


// Articles 
import articles from './data/articles.js';
import Article from './models/article.js';

// Courses
import courses from './data/courses.js';
import Course from './models/course.js';

// Users
import users from './data/users.js';
import User from './models/user.js';

connectDB();

const importArticleData = async () => {

    try{
        console.log('Articles being added: ', articles)
        await Article.deleteMany({});

        await Article.insertMany(articles);

        // articles.forEach(article => {
        //     const newArticle = new Article(article)
        // });

        console.log(' Article Data Import Success');
 
        process.exit();
    } catch (error)
    {
        console.log(error);
        console.error("Error with article data import");
        process.exit(1);
    }
};

const importCoursesData = async () => {

    try{
        await Course.deleteMany({});

        await Course.insertMany(courses);

        console.log(' Course Data Import Success');

        process.exit();
    } catch (error)
    {
        console.log(error);
        console.error("Error with course data import");
        process.exit(1);
    }
};

const importUsersData = async () => {

    try{
        await User.deleteMany({});

        await User.insertMany(users);

        console.log(' Users Data Import Success');

        process.exit();
    } catch (error)
    {
        console.log(error);
        console.error("Error with user data import");
        process.exit(1);
    }
};

importArticleData();
importCoursesData();
importUsersData();