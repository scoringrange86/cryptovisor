//
//      Accesses DB to return requested data
//

import Article from "../models/article.js";

const getArticlebyId = async (request, response) =>{

    try{
        const article = await Article.findById(request.params.id);

        response.json(article);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

export const getArticlesbyType = async (request, response) =>{

    try{
        const articles = await Article.find({type: request.params.type });

        response.json(articles);
    }catch(error){
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
    
}


export default getArticlebyId 
