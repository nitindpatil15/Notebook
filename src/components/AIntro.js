import React from "react";
import "./nav.css";
import Register from "./register.jpg";
import notes from "./notes.jpg";

const AIntro = () => {
  return (
    <>
      <p className="m-5" style={{ fontSize: "20px" }}>
        At{" "}
        <span className="text-primary">
          <b>iNoteBook</b>
        </span>
        , we provide a secure and user-friendly platform for you to organize and
        manage your notes effortlessly. To access the full suite of features,
        we've implemented a secure login system to protect your data.
      </p>

      {/* Key Features */}

      <h1 className="text-primary mt-5">Key Features:</h1>
      <section className="d-flex">
        <ul>
          <li className="nav-link">
            <h3 className="text-secondary">Account Registration/Login:</h3>
            <p className="mx-3 text-dark">
              To start using the app, users need to register for an account.
              Rest assured, your login information is stored securely to protect
              your privacy.
            </p>
          </li>
          <li className="nav-link">
            <h3 className="text-secondary">Add Notes:</h3>
            <p className="mx-3 text-dark">
              Once logged in, you can easily add new notes using our intuitive
              "Add Note" feature. You have the flexibility to include a title,
              description, and tags to categorize your notes efficiently.
            </p>
          </li>
          <li className="nav-link">
            <h3 className="text-secondary">Manage Your Notes:</h3>
            <p className="mx-3 text-dark">
              Head to the "Notes" section to read, update, or delete your notes.
              We've designed a user-friendly interface to streamline your note
              management process.
            </p>
          </li>
          <li className="nav-link">
            <h3 className="text-secondary">Security First:</h3>
            <p className="mx-3 text-dark">
              We prioritize the security of your login information. Our robust
              security measures ensure that your data is encrypted and stored
              with the utmost care. Feel confident in using{" "}
              <span className="text-primary">
                <b>iNoteBook</b>
              </span>{" "}
              for all your note-taking needs.
            </p>
          </li>
        </ul>
      </section>

    {/* User Control  */}
      <section>
      <h2 className="text-primary">Your Data, Your Control:</h2>
      <p className="text-dark mx-5" style={{fontSize:"20px"}}>We believe in giving you full control over your data. Your notes are yours, and we provide a hassle-free way to manage, update, or delete them whenever you need.</p>
      </section>

    {/* Demo Images  */}
      <div className="d-flex">
          <div>
            <img className="demo mt-5" src={Register} alt="demo" />
            <h4 className="text-danger text-center"> *Login and Registration</h4>
          </div>
          <div>
            <img className="demo demo-img mt-5" src={notes} alt="demo" />
            <h4 className="text-danger text-center">*Adding Notes and Reading</h4>
          </div>
        </div>

       
    </>
  );
};

export default AIntro;
