//
//      Returns the collection from db to be used
//

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema ({

        title: {
            type: String,
            required: true
        },
        
    courseContent: {
        type: Array,
        required: true
    },
    order: {
        type: Number,
        required: true
    }

})

const Course = mongoose.model('course', courseSchema);

export default Course;