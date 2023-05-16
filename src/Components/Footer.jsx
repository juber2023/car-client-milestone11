import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-white">
              <img src={logo} className="text-lg font-bold mb-2"></img>
              <p>&copy; {new Date().getFullYear()} MyWebsite</p>
              <p>Car Mechanics</p>
              <p>address</p>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <p>Phone: </p>
              <p>Email: </p>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-bold mb-2">Services</h3>
              <ul className="list-disc pl-4">
                <li>Engine Repair</li>
                <li>Brake Replacement</li>
                <li>Oil Change</li>
                <li>Tire Rotation</li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;