import * as React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.scss";
import MailchimpForm from "../components/mailchimp-form";
import Sprinkles from "../components/sprinkles";

// markup
const IndexPage = () => {
  return (
    <main className="page">
      <title>Home Page</title>
      <div className="hero">
        <h1 className="logo">sprinkls</h1>  
        <h1>
          Let your customers speak for you.
        </h1>
        <div class="description">
          <p>
            Create affiliate marketing campaigns for your business in an instant. Reward your customers for spreading the word about your business.
          </p>
        </div>
        <MailchimpForm />
      </div>
      <Sprinkles />
    </main>
  )
}

export default IndexPage
