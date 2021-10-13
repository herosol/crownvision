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
import LoginScreen from "./Screens/Auth/LoginScreen";
import RegisterScreen from "./Screens/Auth/RegisterScreen";
import BlogDetailScreen from "./Screens/Front/BlogScreen/BlogDetailScreen";
import ReadyDesign from "./Screens/Front/AdDesign/ReadyDesign";

function App() {
  render();
  {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/locations" component={LocationsScreen} />
          <Route exact path="/gallery" component={GalleryScreen} />
          <Route exact path="/blog" component={BlogScreen} />
          <Route exact path="/blog-detail" component={BlogDetailScreen} />
          <Route exact path="/contact-us" component={ContactUsScreen} />
          <Route exact path="/design/ready" component={ReadyDesign} />
          <Route exact path="/auth/enter" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
