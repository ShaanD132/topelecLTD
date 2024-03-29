import React from "react";

const ContactForm: React.FC = () => {
  return(
    <div className = "pt-32 px-20 mb-10">
      <p className = "font-ob text-3xl">Email Form</p>
      <div className = "font-letters">
        <form target = "_blank" action="https://formsubmit.co/41bf71794ccfe16d4d0729c4b8c25f60" method="POST" className = "email-form">
          <input type = "hidden" name = "_subject" value = "New Email from Website"/>
          <input type = "email"  name = "Email" placeholder = "Email Address" required className = "email-input outline outline-2"/>
          <input type="text" name="Name" placeholder = "Name" className = "email-input outline outline-2" required />
          <textarea name="Message" className = "message outline outline-2" placeholder = "Write Message" required></textarea>
          <input type = "hidden" name = "_next" value = "http://topelec-ltd.vercel.app/"/>
          <button type="submit"  className = "btn font-o bg-black text-white rounded-md"><p className = "p-3">Send Email</p></button>
      </form>
      </div>
    </div>
  )
}

export default ContactForm