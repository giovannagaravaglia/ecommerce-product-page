import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Gallery from './Gallery.jsx'
import Description from './description'
import InfoProduct from './infoProduct'
import ButtonQtd from './buttonQtd'
import PageMain from './pageMain'
import Menu from './menu'
import FullPage from './fullPage'
import GalleryFullScreen from './galleryFullScreen'
import GalleryDefaultScreen from './GalleryDefaultScreen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FullPage />
  </StrictMode>,
)
