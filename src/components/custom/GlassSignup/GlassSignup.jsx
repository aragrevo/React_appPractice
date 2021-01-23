/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import './GlassSignup.css';

// https://codepen.io/aadil_31/pen/RwGEZpQ
// https://www.instagram.com/thewebdeveloper_/

export const GlassSignup = () => {
  return (
    <div className="container-form">
      <div className="intro-text">
        <h5>
          Create an account to
          <br />
          view this page
        </h5>
      </div>
      <div className="inputs">
        <div className="name-input">
          <div id="inputOne">
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div id="inputTwo">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="email-input">
          <label>Email</label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div className="btn-box">
          <p>By joining, you agree to the and Privacy policy</p>
          <button>Sign up</button>
        </div>
      </div>
      <div className="other-content">
        <p>Or sing up with</p>
        <div className="links">
          <a href="#">
            <i>
              <TwitterOutlined />
            </i>
          </a>
          <a href="#">
            <i>
              <GithubOutlined />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};
