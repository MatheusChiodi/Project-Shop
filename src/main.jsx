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
    <Slide customClass="mt-0 md:mt-[40px]" customClassImg="w-full h-[350px]" customClassImgMobile="w-full h-[650px]"/>
    <MoreSearch />
    <QuickAccess />
    <FindHere />
    <News />
    <Portals />
    <App />
    <Footer />
  </React.StrictMode>,
)
