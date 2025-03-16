import { Hero, Matrix, Contact, Footer, Projects, AboutMe } from "../ui";

const PortfolioPage = () => {
  return (
    <div>
      <div>
        <Hero />
        <AboutMe />
        <Projects />
        <Matrix />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;
