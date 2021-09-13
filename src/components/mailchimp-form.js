import React, { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './mailchimp-form.scss';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addToMailchimp(email);
    if (res.result === 'success') {
      setSubscribed(true);
      setError(null);
    } else {
      setError('Please enter a valid email address.');
    }
  }

  return (
    <div className="mailchimp">
      <p>Interested? Join our newsletter and we'll let you know when we go live.</p>
      <form className="email-input-container">
        <input
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button className="submit" type="submit" onClick={handleSubmit}>
          <BiRightArrowAlt color="#FFF" size={24}/>
        </button>
      </form>
      {error && (
        <div className="subscribed-annotation">
          <p className="error">{error}</p>
        </div>
      )}
      {subscribed && (
        <div className="subscribed-annotation">
          🎉
          <p>Subscribed!</p>
        </div>
      )}
    </div>
  )
};

export default MailchimpForm;