import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App'
import ChapterView from './components/ChapterView';
import Home from './components/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path=':chapterId' element={<ChapterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

if("serviceWorker" in navigator){
  // navigator.serviceWorker.register("/sw.js")
}