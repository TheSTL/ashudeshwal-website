/* eslint-disable prettier/prettier */
import React from 'react';
import Config from '../../config/config';

import './index.css';

export default function component() {
  return (
    <main className="site-main">
      <div className="content-area">
        <h1 className="entry-title">Hello there</h1>
        <div className="description">
          <p> Say <span className="contact-highlights">Hi</span> or you can recommend me Anime at <span className="contact-highlights">ashudeshwal999@gmail.com</span> .
          <h4>Find me on other platforms.</h4> 
          Like <a href={Config.GITHUB_URL}><span className="contact-highlights">Github</span></a>,<a href={Config.LINKEDIN_URL}><span className="contact-highlights">LinkedIn</span></a>,<a href={Config.TWITTER_URL}><span className="contact-highlights">Twitter</span></a>,<a href={Config.INSTAGRAM_URL}><span className="contact-highlights">Instagram</span></a>
          </p>
        </div>
      </div>
    </main>
  );
}
