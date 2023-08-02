import React, { FC } from "react";

const ContactPage: FC = () => {
  return (
    <div className={"contact"}>
      <h3>Contact Me</h3>
      <form>
        <label>
          <span>Your Email:</span>
          <input type="email" name={"email"} required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name={"message"} required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
