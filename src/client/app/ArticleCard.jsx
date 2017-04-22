import React from 'react'

import StyledArticleText from './ArticleText.jsx'

export default class ArticleCard extends React.Component {
  render () {
    const {heading, subheading, strapline, image} = this.props
    return (
      <div>
        <img src={image} style={{width:'100px', height:'50px'}}/>
        <StyledArticleText heading={heading}
          subheading={subheading}
          strapline={strapline}/>
      </div>
    )
  }
}
