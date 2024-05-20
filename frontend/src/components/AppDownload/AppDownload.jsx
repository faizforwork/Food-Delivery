import React from 'react'
import "./AppDownload.css"
import {assets} from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app app-download' id='app-download'>
      <h1>For better experience download our app</h1>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload