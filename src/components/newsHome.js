import axios from 'axios'
import React, { useState } from 'react'
// import { News } from './news'


export default function NewsHome() {
    
    const [news,setnews] = useState([]);
    const getnews=()=>{
          axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=f266e1316d524a668e8ab3a0ed89b423")
          .then((res)=>{
            //   console.log(res);
            setnews(res.data.articles)
            console.log(news)
          })
    }
    const [snews,setsnews] = useState([]);
    const getsportsnews=()=>{
         
          axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=f266e1316d524a668e8ab3a0ed89b423")
          .then((res)=>{
            //   console.log(res);
            setsnews(res.data.articles)
            console.log(news)
          })
    }
    

    return (
    <>
   <div className="container mx-auto justify-content-center"></div>
      <a name="" id="" class="btn btn-primary" onClick={getnews}  href="#" role="button">trending news</a>
      <a name="" id="" class="btn btn-primary" onClick={getsportsnews}  href="#" role="button">sports news</a>
            <div class="container-fluid">
                <div className="container">
                                      
                    <div className="row">

                        <div className="col-md-10 col-10 mx-auto order-1 ">
                            <div className="row ">
                             

                             {
                                 news.map((c)=>{
                                     return(
                                         <>
                                         <div className="col-md-4 col-5 mx-auto my-4">
                                         <div class="card text-start text-dark">
                                           <img class="card-img-top" src={c.urlToImage} alt=""/>
                                           <div class="card-body">
                                             <h4 class="card-title">{c.title}</h4>
                                             <p class="card-text">{c.content}</p>
                                           </div>
                                         </div>
                                         </div>
                                         </>
                                     )
                                 })
                             }

                             {
                                 snews.map((c)=>{
                                     return(
                                         <>
                                         <div className="col-md-3 col-5 mx-auto my-3 ">
                                         <div class="card text-start">
                                           <img class="card-img-top" src={c.urlToImage} alt=""/>
                                           <div class="card-body">
                                             <h4 class="card-title">{c.title}</h4>
                                             <p class="card-text">{c.content}</p>
                                           </div>
                                         </div>
                                         </div>
                                         </>
                                     )
                                 })
                             }

                            {/* {
                                News.map((c) => {
                                    return (
                                        <>
                                        <div className="col-md-6 col-5">
                                            <div class="card text-start|center|end mt-5  bg-primary text-light">
                                                <img class="card-img-top" src={c.urlToImage} alt="" />
                                                <div class="card-body">
                                                    <h4 class="card-title">{c.author}</h4>
                                                    <p class="card-text">{c.description}</p>
                                                </div>
                                            </div>
                            </div>
                                        </>
                                    )
                                })
                            } */}
                            </div>
                         </div>   

{/* 
                            <div className="col-md-4 col-10 order-2">
                                <div className="col-md-12 col-12 bg-danger sticky-top">

                                    <div class="card text-start|center|end sticky-top bg-danger">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                                        <div class="card-body">
                                            <h4 class="card-title">Title</h4>
                                            <p class="card-text">Body</p>
                                        </div>
                                    </div>
                                    <div class="card text-start|center|end sticky-top bg-danger">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                                        <div class="card-body">
                                            <h4 class="card-title">Title</h4>
                                            <p class="card-text">Body</p>
                                        </div>
                                    </div>
                                    <div class="card text-start|center|end sticky-top bg-danger">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                                        <div class="card-body">
                                            <h4 class="card-title">Title</h4>
                                            <p class="card-text">Body</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>


            </>
            )
}
