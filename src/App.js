import React, { useEffect } from 'react';
import './index.css';

function App() {

  const handleHomeClick = () => {
    window.location.href = 'https://open.spotify.com/';
  }

  const handleSearchClick = () => {
    window.location.href = 'https://open.spotify.com/search';
  }

  const handleNotNowClick = () => {
    const libraryPopup = document.querySelector('#library-popup');
    libraryPopup.classList.remove('show');
  
    const createPopup = document.querySelector('#create-popup');
    createPopup.classList.remove('create-show');
  
    const likedPopup = document.querySelector('#liked-popup');
    likedPopup.classList.remove('liked-show');
  
    const notNowButtons = document.querySelectorAll('.popupNotNow');
    notNowButtons.forEach((button) => {
      button.removeEventListener('click', handleNotNowClick);
    });
  };
  
  const handleLibraryClick = () => {
    const libraryPopup = document.querySelector('#library-popup');
    libraryPopup.classList.toggle('show');
  
    const notNowButtons = document.querySelectorAll('.popupNotNow');
    notNowButtons.forEach((button) => {
      button.addEventListener('click', handleNotNowClick);
    });
  };
  
  const handleCreateClick = () => {
    const createPopup = document.querySelector('#create-popup');
    createPopup.classList.toggle('create-show');
  
    const notNowButtons = document.querySelectorAll('.popupNotNow');
    notNowButtons.forEach((button) => {
      button.addEventListener('click', handleNotNowClick);
    });
  };
  
  const handleLikedClick = () => {
    const likedPopup = document.querySelector('#liked-popup');
    likedPopup.classList.toggle('liked-show');
  
    const notNowButtons = document.querySelectorAll('.popupNotNow');
    notNowButtons.forEach((button) => {
      button.addEventListener('click', handleNotNowClick);
    });
  };
  
  useEffect(() => {
    const libraryButton = document.querySelector('.library-btn');
    libraryButton.addEventListener('click', handleLibraryClick);
  
    const createButton = document.querySelector('.create-btn');
    createButton.addEventListener('click', handleCreateClick);
  
    const likedButton = document.querySelector('.likedSongs-btn');
    likedButton.addEventListener('click', handleLikedClick);
  
    return () => {
      libraryButton.removeEventListener('click', handleLibraryClick);
      createButton.removeEventListener('click', handleCreateClick);
      likedButton.removeEventListener('click', handleLikedClick);
    };
  }, []);

  return (
    <div className="App">
      <header className='Header'>
        <button className='leftarrow-btn'>
          <img src={require('./logos/leftarrow.png')} alt='leftarrow' className='leftarrow'/>
        </button>
        <button className='rightarrow-btn'>
          <img src={require('./logos/rightarrow.png')} alt='rightarrow' className='rightarrow' />
        </button>
        <div className='SearchContainer'>
          <div className='search-image'>
            <img src="./logos/search.png" alt="Search Icon" />
          </div>
          <div>
            <input className='SearchBar' type='text' placeholder='' id='search-input' />
          </div>
        </div>
        <button className='SignUp'>Sign Up</button>
        <button className='LogIn'>Log in</button>
      </header>
      <div className="Container">
        <div className='SideBar'>
          <ul>
            <li>
              <a href='#'>
                <img src={require('./logos/Spotify.png')} alt='Spotify' className='spotify' />
                <span className='spot-text'>Spotify</span>
              </a>
            </li>
            <li>
              <button className='home-btn' onClick={handleHomeClick}>
                <img src={require('./logos/home.png')} alt='Home' className='home' />
                <span className="btn-text">Home</span>
              </button>
            </li>
            <li>
              <button className='search-btn' onClick={handleSearchClick}>
                <img src={require('./logos/search.png')} alt='Search' className='search' />
                <span className="btn-text">Search</span>
              </button>
            </li>
            <li>
              <button className="library-btn">
                <img src={require('./logos/library.png')} alt='Library' className='library' />
                <span className="btn-text">Your Library</span>
              </button>
            </li>
            <li>
              <button className='create-btn'>
                <img src={require('./logos/add.png')} alt='create' className='create' />
                <span>Create PlayList</span>
              </button>
            </li>
            <li>
              <button className='likedSongs-btn'>
                <img src={require('./logos/heart.png')} alt='liked' className='likedSongs' />
                <span>Liked Songs</span>
              </button>
            </li>
          </ul>
        </div>
        <div id="library-popup">
            <p>Enjoy Your Library</p>
            <h2>Log in to see saved songs, podcast, artist, and playlist in Your Library</h2>
            <button className='popupNotNow'>Not Now</button>
            <button className='popupLogin'>Log in</button>
        </div>
        <div id='create-popup'>
          <p>Create a playlist</p>
          <h2>Log in to create and share playlist.</h2>
          <button className='popupNotNow'>Not Now</button>
          <button className='popupLogin'>Log in</button>
        </div>
        <div id='liked-popup'>
          <p>Enjoy your Liked Songs</p>
          <h2>Log in to see all the songs you've liked in one easy playlist</h2>
          <button className='popupNotNow'>Not Now</button>
          <button className='popupLogin'>Log in</button>
        </div>
        <main>
          {/* <h1>Popular songs or albums</h1> */}
        </main>
      </div>
      <footer>
        {/* add the footer with links to Spotify app and social media */}
      </footer>
    </div>
  );
}

export default App;
