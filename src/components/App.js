import React from "react";
import Header from "./Includes/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/Front/HomeScreen";
import { render } from "@testing-library/react";
import Footer from "./Includes/Footer";
import LocationsScreen from "./Screens/Front/LocationsScreen/LocationsScreen";
import GalleryScreen from "./Screens/Front/GalleryScreen/GalleryScreen";
import BlogScreen from "./Screens/Front/BlogScreen/BlogScreen";
import ContactUsScreen from "./Screens/Front/ContactUsScreen/ContactUsScreen";

function App() {
  render();
  {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={HomeScreen}
            activeClassName="active"
          />
          <Route
            exact
            path="/locations"
            component={LocationsScreen}
            activeClassName="active"
          />
          <Route
            exact
            path="/gallery"
            component={GalleryScreen}
            activeClassName="active"
          />
          <Route
            exact
            path="/blog"
            component={BlogScreen}
            activeClassName="active"
          />
          <Route
            exact
            path="/contact-us"
            component={ContactUsScreen}
            activeClassName="active"
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
