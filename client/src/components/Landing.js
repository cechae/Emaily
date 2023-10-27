import React from 'react';
import Survey_img from '../survey_img.jpg';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Welcome to Emaily </h1>
      <h5>Collect feedback from your users.</h5>
      <img className="responsive-img" src={Survey_img} />
    </div>
  );
};
export default Landing;
