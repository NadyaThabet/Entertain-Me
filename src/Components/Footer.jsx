import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiCopyright } from "react-icons/bi";
import "../Style/footer.css";

const Footer = () => {
  return (
    <section className="footer text-center mt-auto py-3">
      <footer>
        <div className="copy mt-2 text-white">
          <div>
            <span>Copyrights 2024. Designed by </span>
            <span className="name-span">
              Nadia Thabet
              <span className="heart ms-1"></span>
            </span>
          </div>
          <div>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
