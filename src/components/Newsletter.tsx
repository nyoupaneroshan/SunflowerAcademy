import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-primary/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest news and events. Subscribe to our newsletter.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;