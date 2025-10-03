import React, { useState, useRef } from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hotel: '',
    rooms: '',
    phone: '',
    preferredTime: ''
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
    hotel: yup
      .string()
      .required('Hotel name is required')
      .min(2, 'Hotel name must be at least 2 characters'),
    phone: yup
      .string()
      .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
    rooms: yup.string(),
    preferredTime: yup.string()
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

      console.log('Demo request:', { ...formData, captcha: captchaValue });
      alert("Thank you! We'll contact you shortly to schedule your demo.");

      setFormData({
        name: '',
        email: '',
        hotel: '',
        rooms: '',
        phone: '',
        preferredTime: ''
      });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();

    } catch (error) {
      if (error instanceof yup.ValidationError) {
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
    <section id="demo" className="py-20 bg-[#864312]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <header className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Hotel Operations?
                </h2>
                <p className="text-xl text-coffee-100">
                  Book a personalized demo and see how HotelPro can help you increase 
                  efficiency, boost revenue, and deliver exceptional guest experiences.
                </p>
              </header>

              <div className="space-y-6">
                <article className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Calendar className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Demo</h3>
                    <p className="text-[#d2b48c]">Tailored to your hotel's specific needs</p>
                  </div>
                </article>

                <article className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">30-Minute Session</h3>
                    <p className="text-[#d2b48c]">Quick overview of key features</p>
                  </div>
                </article>

                <article className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-[#d2b48c]">Learn from hotel industry specialists</p>
                  </div>
                </article>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#562d0b] mb-6 text-center">
                Book Your Free Demo
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-name" className="block text-coffee-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="demo-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all ${
                        errors.name ? 'border-red-500' : 'border-[#d2b48c]'
                      }`}
                      placeholder="Endy Igho"
                      aria-describedby={errors.name ? 'demo-name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="demo-name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="demo-email" className="block text-[#562d0b] font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="demo-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-[#d2b48c]'
                      }`}
                      placeholder="Endurance@ATSLng.com"
                      aria-describedby={errors.email ? 'demo-email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="demo-email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-hotel" className="block text-[#562d0b] font-medium mb-2">
                      Hotel Name *
                    </label>
                    <input
                      type="text"
                      id="demo-hotel"
                      name="hotel"
                      value={formData.hotel}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all ${
                        errors.hotel ? 'border-red-500' : 'border-[#d2b48c]'
                      }`}
                      placeholder="HotelPro"
                      aria-describedby={errors.hotel ? 'demo-hotel-error' : undefined}
                    />
                    {errors.hotel && (
                      <p id="demo-hotel-error" className="text-red-500 text-sm mt-1" role="alert">{errors.hotel}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="demo-rooms" className="block text-[#562d0b] font-medium mb-2">
                      Number of Rooms
                    </label>
                    <select
                      id="demo-rooms"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-coffee-200 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="1-25">1-25 rooms</option>
                      <option value="26-50">26-50 rooms</option>
                      <option value="51-100">51-100 rooms</option>
                      <option value="100+">100+ rooms</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-phone" className="block text-[#562d0b] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="demo-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all ${
                        errors.phone ? 'border-red-500' : 'border-[#d2b48c]'
                      }`}
                      placeholder="+234 807 7215 000"
                      aria-describedby={errors.phone ? 'demo-phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="demo-phone-error" className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="demo-time" className="block text-[#562d0b] font-medium mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="demo-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#d2b48c] rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
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
                  className="w-full bg-[#864312] text-white py-4 cursor-pointer rounded-xl hover:bg-coffee-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit demo booking form"
                >
                  {isSubmitting ? (
                    <span>Booking...</span>
                  ) : (
                    <>
                      <span>Book My Demo</span>
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-sm text-[#8d561e] text-center">
                  No spam, ever. We'll only contact you about your demo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo