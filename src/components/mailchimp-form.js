import React, { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import './mailchimp-form.scss';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email);
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
    </div>
  )
};

export default MailchimpForm;