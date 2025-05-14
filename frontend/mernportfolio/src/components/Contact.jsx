import React from 'react'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form
          className="inputs"
          action="https://formspree.io/f/mqakbbzn"
          method="POST"
        >
          <input type="text" placeholder="Name" name="text" required />
          <input type="email" name="text" placeholder="Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Send a message"
            id=""
            required
          ></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact