import React from "react";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate=useNavigate();
  const goToContact = () =>{
    navigate("/Contact")
  }
  return (
    <div>
      <section>
        <h1>About Page</h1>
        <button onClick={()=> goToContact()}>Go to Contact Page</button>
      </section>
    </div>
  );
}

export default About;
