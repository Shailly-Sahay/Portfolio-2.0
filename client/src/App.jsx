import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
// import { Footer } from "./ui";
import { Home, PortfolioPage } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={
              <PageLayout>
                <PortfolioPage />
              </PageLayout>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
