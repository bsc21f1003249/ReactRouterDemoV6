import React from "react"
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate=useNavigate()
  const goToHome = () =>{
    navigate("/")
  }
  return (
    <div>
      <section>
        <h1>Contact Page</h1>
        <button onClick={goToHome}>Go To Home Page</button>
      </section>
    </div>
  );
}

export default Contact;
