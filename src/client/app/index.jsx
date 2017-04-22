import React from 'react'
import {render} from 'react-dom'
import Title from './Title.jsx'
import Input from './Input.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title>A Title</Title>
        <Input />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
