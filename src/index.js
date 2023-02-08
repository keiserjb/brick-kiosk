import React from 'react'
import ReactDOM from 'react-dom'
import './css/react_bricks.css'
import App from './components/App'
import BrickProvider from './context/BrickProvider'
import JsonApiProvider from './context/JsonApiProvider'





ReactDOM.render(
  <JsonApiProvider>
    <BrickProvider>
      <App />
    </BrickProvider>
  </JsonApiProvider>,
  document.getElementById('root')
)


