import React from "react";
import "./home.css";

function home() {
  return (
    <div id="HomePage">
      <div class="home-main">
        <nav class="home-navbar">
          <li>
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul>
              <a href="/expertAdvice">Expert Advise</a>
            </ul>
            <ul>
              <a href="/profile">Profile</a>
            </ul>
          </li>
        </nav>
        <div class="home-body">
          <div class="home-icon">
            <h1 id="text-up">C</h1>
            <h1 id="text-down">R</h1>
            <h1 id="text-up">O</h1>
            <h1 id="text-down">P</h1>
          </div>
          <h1 class="home-icon-cont">Detection System</h1>
          <div class="home-operation">
            <div class="home-search-container">
              <input
                type="search"
                name="input-search"
                id="home-search-input"
                placeholder="Search your problem"
              />
              <button>
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
