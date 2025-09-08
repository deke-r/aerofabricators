import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMsg(null);

    try {
      const apiUrl = 'http://192.168.1.10:4000';
      const res = await axios.post(`${apiUrl}/contact-form-data`, data);

      if (res.data.success) {
        setResponseMsg({ type: 'success', text: 'Message sent successfully!' });
        reset();
      } else {
        setResponseMsg({ type: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMsg({ type: 'error', text: 'Server error. Please try later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrap">
      <div className="container">
        <div className="contact-section">
          <div className="form-wrap shadow-sm">
            <h2>Contact Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("user_name", { required: "Name is required" })}
                />
                {errors.user_name && <span className="error">{errors.user_name.message}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("user_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.user_email && <span className="error">{errors.user_email.message}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("user_phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit Indian mobile number"
                    }
                  })}
                />
                {errors.user_phone && <span className="error">{errors.user_phone.message}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <span className="error">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <textarea
                  rows="4"
                  placeholder="Message"
                  {...register("user_message", { required: "Message is required" })}
                ></textarea>
                {errors.user_message && <span className="error">{errors.user_message.message}</span>}
              </div>

              <button
                type="submit"
                className="btn Contact_sub w-100 text-light fw-semibold f_14"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {responseMsg && (
                <div
                  className={`mt-3 alert ${
                    responseMsg.type === "success" ? "alert-success" : "alert-danger"
                  }`}
                >
                  {responseMsg.text}
                </div>
              )}
            </form>
          </div>

          <div className="contact-information">
            <h4>What happens next?</h4>
            <ol>
              <li>You’ll be contacted within a few days by our sales manager, who will have carefully reviewed your business needs.</li>
              <li>Your confidentiality is important to us—we’ll formalize it with a non-disclosure agreement (NDA).</li>
              <li>Our pre-sales team will share a cost estimate along with a tentative project timeline.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
