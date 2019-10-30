/* eslint-disable prettier/prettier */
import React from 'react';
import Config from '../../config/config';

import './index.css';

export default function component() {
  return (
    <main className="site-main">
      <div className="content-area">
        <h1 className="entry-title">Hi there, I&apos;m Ashu Deshwal</h1>
        <div className="description">
          <img className="description-image" src={Config.ENGINEER_IMAGE} alt="ashu" />
          <div className="about-me">
            I am a Software Engineer. I like to play with Javascript and rest with Data Structures and Algorithms.
          </div>
        </div>
      </div>
    </main>
  );
}
