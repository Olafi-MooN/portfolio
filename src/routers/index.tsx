import { Routes as Router, BrowserRouter, Route } from "react-router-dom";

import { LandingPage } from "../pages/landing-page";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<LandingPage/>}></Route>
      </Router>
    </BrowserRouter>
  );
}

export { Routes };