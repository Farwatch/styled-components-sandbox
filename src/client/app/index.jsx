import React from 'react'
import {render} from 'react-dom'
import StyledArticleCard from './StyledArticleCard.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        {renderArticles()}
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))

function renderArticles(){
  const quokka = require('./img/quokka.jpg')
  let articles = []
  for(let i=0; i<5; i++){
    articles.push(
      <StyledArticleCard heading="HEADING"
                   subheading="SUBHEADING"
                   strapline="STRAPLINE"
                   image={quokka}/>
    )
  }
  return articles
}
