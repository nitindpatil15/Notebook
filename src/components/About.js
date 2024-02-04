import React from 'react';
import AIntro from './AIntro';
import Developer from './Developer';
const About = () => { 
  return (
    <>
    <h3
        className="text-secondary text-center my-3"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.234)",
          display: "block",
        }}
      >
        {" "}
        <span className="text-danger">**</span> Welcome to iNoteBook – your
        personal note-taking companion! <span className="text-danger">**</span>
      </h3>
    <AIntro/>
    <Developer/>
     </>
  )
}

export default About
