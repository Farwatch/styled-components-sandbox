import React from 'react'
import styled from 'styled-components'

import ArticleHeading from './ArticleHeading.jsx'
import ArticleSubHeading from './ArticleSubHeading.jsx'
import ArticleStrapline from './ArticleStrapline.jsx'

class ArticleText extends React.Component {
  render () {
    const {heading, subheading, strapline} = this.props
    return (
      <div>
        <ArticleSubHeading>{subheading}</ArticleSubHeading>
        <ArticleHeading>{heading}</ArticleHeading>
        <ArticleStrapline>{strapline}</ArticleStrapline>
      </div>
    )
  }
}

const StyledArticleText = styled(ArticleText)`
  width: 200px;
  height: 50px;
  float: right;
  display: none;
`

export default StyledArticleText
