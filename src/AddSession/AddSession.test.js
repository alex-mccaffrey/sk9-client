import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddSession from './AddSession'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddSession />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
