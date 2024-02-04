import React from "react";
import { Link } from "react-router-dom";

const Developer = (props) => {
  return (
    <>
      {/* Information About Creater  */}
      <h1
        className="text-secondary text-center my-5 "
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.234)",
          display: "block",
        }}
      >
        {""}
      </h1>
      <section>

        {/* 1 . Built with MERN Developement: */}
        <h3 className="text-secondary">1. Built with MERN Developement:</h3>
        <p className="mx-5 my-2" style={{ fontSize: "20px" }}>
          I developed{" "}
          <span className="text-primary">
            <b>iNoteBook</b>
          </span>{" "}
          using{" "}
          <span className="text-primary">
            <b>MongoDB , Express JS , React JS, Node JS and Bootstrap </b>
          </span>
          . These tools played a crucial role in creating a robust and efficient
          platform for you to manage your notes effortlessly.
        </p>

        <h3 className="text-secondary">2. Get in Touch:</h3>
        <p className="mx-5 my-2" style={{ fontSize: "20px" }}>
        Whether you have feedback, suggestions, or just want to say hello, I'd love to hear from you. Feel free to reach out via <Link to="mailto:nitindpatil2002@gmail.com" className="text-decoration-none">nitindpatil2002@gmail.com</Link> or connect with me on <Link to="https://www.instagram.com/nitin_rajput_15?igsh=MnFlazVxdXA2OHd4" className="text-decoration-none">Nitin Patil Instagram</Link>.
        </p>

        <h3 className="text-secondary">3. Thanks for Choosing <span className="text-primary" style={{ fontSize: "19px" }}>
            <b>iNoteBook</b> </span>:</h3>
            
            <p className="mx-5 my-2 mb-5" style={{ fontSize: "20px" }}>
            I appreciate your trust in <span className="text-primary">
            <b>iNoteBook</b></span>. I hope it becomes a valuable companion in your note-taking journey. Stay tuned for future updates and enhancements!
            </p>
      </section>
    </>
  );
};

export default Developer;
