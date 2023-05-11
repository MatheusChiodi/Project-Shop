import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './template/Header'
import MoreSearch from './template/MoreSearch'
import Slide from './component/Slide'
import QuickAccess from './component/QuickAccess'
import FindHere from './component/FindHere'
import News from './component/Important'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MoreSearch />
    <Slide />
    <QuickAccess />
    <FindHere />
    <News />
  </React.StrictMode>,
)
