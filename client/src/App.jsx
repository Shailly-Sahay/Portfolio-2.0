import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import { Footer } from "./ui";
import { Home, PortfolioPage, Projects } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route
                    path="/about"
                    element={
                      <PageLayout>
                        <p>Rahjds</p>
                      </PageLayout>
                    }
                  />
                  <Route
                    path="/projects"
                    element={
                      <PageLayout>
                        {" "}
                        <Projects />
                      </PageLayout>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <PageLayout>
                        <div>HAHAAHAH</div>
                      </PageLayout>
                    }
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
