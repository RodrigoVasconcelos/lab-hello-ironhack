'user strict';

import React, { Component } from 'react';
import './App.css';



const images = {
  logo:  "./images/ironhack-logo.svg",
  menu: "./images/menu-top.svg",
  declarative: "./images/icon1.png",
  components: "./images/icon2.png",
  singleWay: "./images/icon3.png",
  jsx: "./images/icon4.png"
}


class App extends Component {
  render(){
    return (
      <div> 
        <header>
          <nav>
            <div><img src= {images.logo} /></div>
            <div><img src= {images.menu} /></div>
          </nav>
            <div>
              <h1>Say hello to ReactJS</h1>
              <p>asdahscajsvca hjvscajhsvchajs vcajhsvchjasvc</p>
              <button>Awesome!</button>

            </div>
        </header>
        <main>
          <section className="sections">
            <article>
              <img src= {images.declarative} />
              <h3>Declarative</h3>
              <p>
                ajkhALKJKLJD LKJALKDJSA LJDALKJDASLD.
              </p>
            </article>
            <article>
              <img src= {images.components} />
              <h3>Declarative</h3>
              <p>
                ajkhALKJKL JDLKJALKDJSA LJDALKJDASLD
              </p>
            </article>
            <article>
              <img src= {images.singleWay} />
              <h3>Declarative</h3>
              <p>
                ajkhALK JKLJDLKJALKDJ SALJD ALKJDASLD
              </p>
            </article>
            <article>
              <img src= {images.jsx} />
              <h3>Declarative</h3>
              <p>
                ajkhAL KJKLJDL KJALKDJ SALJDAL KJDASLD
              </p>
            </article>
          </section>
        </main>
      </div>
      )
  }
}

export default App;