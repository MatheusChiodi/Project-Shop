import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './template/Header'
import MoreSearch from './template/MoreSearch'
import Slide from './component/Slide'
import QuickAccess from './component/QuickAccess'
import FindHere from './component/FindHere'
import News from './component/News'
import Portals from './component/Portals'
import App from './component/App'
import Footer from './template/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MoreSearch />
    <Slide />
    <QuickAccess />
    <FindHere />
    <News />
    <Portals />
    <App />
    <Footer />
  </React.StrictMode>,
)
