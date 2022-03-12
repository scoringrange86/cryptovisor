import './RightPanel.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
import GrayBitcoin from '../images/GrayBitcoin.svg'
import BitCasino from '../images/BITCASINO.svg'
import Analysis from '../Pages/AnalysisPage';
import axios from 'axios';

function displayInfo (res) {
    console.log("Data Received")
    let articlesData = res.data;
    console.log("Article Data: ", articlesData);
}

const RightPanel = () => {

    const [articles, setArticles] = useState([]) 

    useEffect ( () => {
        fetch('http://localhost:5000/api/articles/News')
        .then(
            response => {
                return response.json()
            }
        )
        .then(
            data => {
                console.log(data)
                setArticles(data)
            }
        )
        .catch(
            error => console.log(error)
        )
    } , [])
    // Maybe just do one thread of news right now??
    return (
        <div className="rightpanel-wrapper">
            <div className="USDC-wrapper">
                <div className="USDC-Articles-wrapper">
                    <div className="rightpanel-title">
                        <h1>US Digital Currency News </h1>
                    </div>
                    {
                        articles.map( (article) => (
                    <div className="article-wrapper" key={article._id}>
                        <Link to="#" className="img-btn">
                            <img src={GrayBitcoin} alt="" className="ShinyBitcoin"/>
                        </Link>
                        <div className="article-contents">
                            <Link className="article-title" to={article.analysis ? `/Analysis/${article.title}` : `/Articles/${article.title}`}>{article.title}</Link>
                            <div className="article-signature">
                                <div className="article-author">
                                    <p className="article-author-by">by</p>
                                    <p className="article-author-name">{article.author}</p>
                                </div>
                                <p className="article-author-time">{article.timeStamp}</p>
                            </div>
                            <p className="article-message">
                                {article.message}
                            </p>
                        </div>
                    </div>
                        )
                        )
                    }
                    
                </div>
                {/* onClick getMoreArticles */}
                <button className="right-panel-btn" id="USDCNewsLoadButton"> Load More</button> 
            </div>
            <div className="Industry-News-wrapper">
                <div className="rightpanel-title">
                    <h1>Industry News </h1>
                </div>
                {
                        articles.map( (article) => (
                    <div className="article-wrapper" key={article._id}>
                        <Link to="#" className="img-btn">
                            <img src={BitCasino} alt="" className="ShinyBitcoin"/>
                        </Link>
                        <div className="article-contents">
                            <Link className="article-title" to="#">{article.title}</Link>
                            <div className="article-signature">
                                <div className="article-author">
                                    <p className="article-author-by">by</p>
                                    <p className="article-author-name">{article.author}</p>
                                </div>
                                <p className="article-author-time">{article.timeStamp}</p>
                            </div>
                            <p className="article-message">
                                {article.message}
                            </p>
                        </div>
                    </div>
                        )
                        )
                    }

                <button className="right-panel-btn"> Load More</button>
            </div>
        
       </div>
    )
}

export default RightPanel