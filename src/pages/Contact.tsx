import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Please fill out the form below or use our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-yellow-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Tarakeshwor- 06, KTM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(977) 01-5136321</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">sfa2061@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;