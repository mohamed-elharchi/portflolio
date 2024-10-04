import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Mohamed Elharchi. </span>
            <br /> Full Stack Developer
          </h1>
          <p className="home__description">
            As a Full Stack Developer, I focus on creating functional and
            reliable web applications. I’m always eager to learn new
            technologies and improve my skills, delivering solid results while
            constantly striving for growth with each project.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowDown />
            </span>
          </Link>
        </div>
      </div>

  

     
        <div className="color__block" />
        <div className="color__block1" />
        <div className="color__block2" />
        <div className="color__block3" />
      
    </section>
  );
};

export default Home;
