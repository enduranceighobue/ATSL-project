import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Please enter a valid email address'),
    message: yup
      .string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      if (!captchaValue) {
        alert('Please complete the reCAPTCHA verification');
        setIsSubmitting(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', { ...formData, captcha: captchaValue });
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      
      setFormData({ name: '', email: '', message: '' });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
      
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach(err => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f0e4]">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#562d0b] mb-6">
            Get in Touch
            <span className="text-[#8b4513] block">We're Here to Help</span>
          </h2>
          <p className="text-xl text-[#8d561e] max-w-3xl mx-auto">
            Have questions about HotelPro? Our team of hotel industry experts is ready 
            to help you find the perfect solution for your property.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#6a3711] mb-6">Contact Information</h3>
                <address className="space-y-6 not-italic">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#864312] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6a3711]">Email Us</h4>
                      <a href="mailto:support@hotelpro.com" className="text-coffee-600 hover:text-coffee-500 transition-colors">
                        support@hotelpro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#864312] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6a3711]">Call Us</h4>
                      <a href="tel:+234 807 5571 000" className="text-[#864312] hover:text-[#8d561e] transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#8d561e] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#864312]">Visit Us</h4>
                      <p className="text-[#8d561e]">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </address>
              </div>

              <aside className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="font-bold text-[#864312] mb-4">Business Hours</h4>
                <dl className="space-y-2 text-[#8b4513]">
                  <div className="flex justify-between">
                    <dt>Monday - Friday</dt>
                    <dd>9:00 AM - 6:00 PM PST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday</dt>
                    <dd>10:00 AM - 4:00 PM PST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </aside>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#864312] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-[#864312] font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#8d561e] focus:border-transparent outline-none transition-all ${
                      errors.name ? 'border-red-500' : 'border-[#d2b48c]'
                    }`}
                    placeholder="Endy Igho"
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[#8b4513] font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#8d561e] focus:border-transparent outline-none transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#d2b48c]'
                    }`}
                    placeholder="Endy@example.com"
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[#6a3711] font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#d2b48c]'
                    }`}
                    placeholder="Tell us about your hotel and how we can help..."
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#864312] text-white py-4 rounded-xl hover:bg-[#8b4513] transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;