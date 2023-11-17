import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function NewsBox(props) {
  const [articles, setArticles] = useState([])
  const[page,setPage]=useState("1")

  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=79966826aee64a2da742bae343ef1e10&page=1`;
    fetch(url).then(result => result.json()).then(resp => setArticles(resp.articles))
  })

function handlePrev()
{
console.log("prev")
}
function handleNext()
{
  let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=79966826aee64a2da742bae343ef1e10&page=${page+1}`;
    fetch(url).then(result => result.json()).then(resp => setArticles(resp.articles))
    setPage(page+1)
}
  return (
    <div>
      <h1 className=' text-center my-3'>Top Headlines</h1>
      <div className='container'>
        <div className='row'>
          {
            articles.map((news) => {
              return <div className='col-md-3' key={news.url}> <NewsItem title={ news.title} description={news.description} src={news.urlToImage} url={news.url} />
              </div>
            })
          }
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button type="button" className="btn btn-dark " onClick={handlePrev}>Previous</button>
      <button type="button" className="btn btn-dark" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default NewsBox