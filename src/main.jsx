import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import PokemonApp from './PokemonApp'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <PokemonApp/>
    </Provider>
  </React.StrictMode>
)
