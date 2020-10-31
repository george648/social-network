import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music';
import MyText from './components/MyText/MyText.jsx';
import {BrowserRouter, Route} from 'react-router-dom';




function App() {

  let postsData = [
    {id:1, like:12, message: 'hi-hi!'},
    {id:2, like:0, message: 'это новый пост'},
    {id:3, like:42, message: 'как настроение!'}
  ]; 

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'component={Dialogs}/>
          <Route path='/profile'render={ () => <Profile postsData={postsData} /> }/>
          <Route path='/news'component={News}/> 
          <Route path='/music'component={Music}/>
          <Route path='/settings'component={Settings}/>
          <Route path='mytext' component={MyText}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
