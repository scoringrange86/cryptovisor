//
//      Returns the collection from db to be used
//

import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema ({

        title: {
            type: String,
            required: true
        },
        
    message: {
        type: String,
        required: true
    },

    timestamp: {
        type: String,
        required: true
    },

    analysis: {
        type: Boolean,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    author: {
        type: String, 
        required: true 
    },

    imageUrl: {
        type: String, 
        required: false
    }

})

const Article = mongoose.model('article', articleSchema);

export default Article;