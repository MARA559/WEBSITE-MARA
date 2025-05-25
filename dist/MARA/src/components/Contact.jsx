import React from 'react';
import emailjs from "@emailjs/browser";
function Contact() {


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_8kfmurh",
    "template_ecbx33i",
    e.target,
    "2rVMjAYWwsWKi5CnJ"
  ).then((result) => {
    console.log("✅ Email sent successfully!", result.text);
    alert("✅ Your message has been sent!");
  }).catch((error) => {
    console.error("❌ Error sending email:", error);
    alert("❌ There was an error sending your message.");
  });
};
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="max-w-lg mx-auto" onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;