import React from 'react'
import profile from "./my-profile.jpg"
function Aboutme() {
  return (

    <section id="about" style={{
      fontFamily: '-apple-system',
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
    }}>
      <div className="about-background" >
        <h2>About Me</h2>
        <h5>Get To Know Me</h5>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={profile} alt="MY PROFILE" className="my-profile"/>
            
              </div>
              <div className="about_grid-content">
                <div className="about_grid-card">
                  <h5>Experience</h5>
                  <small>3 years+</small>
                </div>
                <div className="about_grid-card">
                  <h5>Clients</h5>
                  <small>300+</small>
                </div>
                <div className="about_grid-card">
                  <h5>Projects</h5>
                  <small>3+ completed </small>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident beatae temporibus blanditiis numquam eius aperiam tempore harum sint, nesciunt asperiores dolorem nostrum, minus soluta consequuntur unde aliquid dicta! Perferendis.</p>
                <a href="#contact" className="btn btn-primary">Lets talk</a>
              </div>
            </div>
        </div>
      </div>
    </section>


  )
}

export default Aboutme
