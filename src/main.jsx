import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App'
import ChapterView from './components/ChapterView';
import Home from './components/Home'

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path=':chapterId' element={<ChapterView />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);