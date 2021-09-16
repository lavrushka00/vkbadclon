
import './style.css'
import React, {useState} from 'react';
import Profile from "./pages/profilePgae/profile";
import Music from "./pages/musicPage/music";

import {BrowserRouter , Route, Switch} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
            <div className="App">

                <header className='Header'>

                </header>

                <div className="content">
                    <div className="menu">
                        <a className='menuChose' href = '/Profile'>Профиль</a>
                        <a className='menuChose' >Сообщения</a>
                        <a className='menuChose'>Друзья</a>
                        <a className='menuChose' href = '/Music'>Музыка</a>
                    </div>

                    <div className="mainPage">

                        <Switch>
                            <Route exact path='/Profile' component = {Profile} />
                            <Route exact path='/Music' component = {Music} />
                        </Switch>


                    </div>


                </div>

            </div>
    </BrowserRouter>

  );
}

export default App;
