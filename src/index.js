import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import data from './data.js'

ReactDOM.render(<App data={data} />, document.getElementById('root'))
registerServiceWorker()
