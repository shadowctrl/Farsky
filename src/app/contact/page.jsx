import "./contact.css";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <div className="bg-contact">
      <Navbar />
      <div className="contact-container">
        <p>
          Please contact us only for game support.
          <br />
          <br /> We do not develop games anymore. No job/internship available.
        </p>
        <div className="contact-form-container">
          <form className="contact-form">
            <h2>Contact Us</h2>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
