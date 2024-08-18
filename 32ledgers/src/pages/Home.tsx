// src/pages/Home.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css';
//import backgroundImage from '../assets/images/home_banner.jpg';


const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero bg-white text-white text-center py-2" style={{ minHeight:'200px', backgroundSize: 'cover', backgroundPosition: 'center', borderBottom:'1px dashed gray' }}>
        <div className="container" style={{ paddingBottom:'10px',paddingTop:'10px',backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <h1 className="display-4" style={{color:'black'}}>Empowering Innovation</h1>
          <p className="lead" style={{color:'black'}}>Transform the way you work with our cutting-edge ideas.</p>
          {/*
          <a href="#features" className="btn btn-light btn-lg">Learn More</a>
           Hero Section */}
        </div>
      </header>

      {/* Feature Grid */}
      <section id="features" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0">
              
                <div className="card-body">
                  <h5 className="card-title">Solutions</h5>
                  <p className="card-text">We craft innovative software solutions tailored to your unique business needs. Our team partners with you from concept to deployment, ensuring your vision becomes a reality. From mobile apps to enterprise platforms, we build software that empowers your business to thrive.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
            <div className="card border-0">
              
                <div className="card-body">
                  <h5 className="card-title">Consulting</h5>
                  <p className="card-text">We're your strategic partners, committed to your success. Our experienced consultants provide expert guidance and tailored solutions to help you navigate challenges, seize opportunities, and achieve sustainable growth. Let's work together to unlock your full potential.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
            <div className="card border-0">
              
                <div className="card-body">
                  <h5 className="card-title">Customer First</h5>
                  <p className="card-text">As a company, we believe that our clients' success is our success. We prioritize building strong relationships with our clients, understanding their unique needs, and tailoring our solutions to deliver exceptional results. We're committed to providing outstanding service, transparent communication, and unwavering support every step of the way.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers who are making the most of our platform. Sign up today to begin your journey.</p>
          <a href="/signup" className="btn btn-success btn-lg">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;