import React from 'react';
import { Award, Book, Users, Heart, Target, Shield, Lightbulb, Globe } from 'lucide-react';
import Newsletter from '../components/Newsletter';

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="School building"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Sunflower Academy</h1>
            <p className="text-xl text-white">
              Empowering students with knowledge, skills, and values to succeed in an ever-changing world.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-yellow-50 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
              To be a leading institution recognized for academic excellence, holistic development, and innovation, empowering students to thrive as compassionate leaders and changemakers in a dynamic global community.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
              To be a leading institution recognized for academic excellence, holistic development, and innovation, empowering students to thrive as compassionate leaders and changemakers in a dynamic global community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Acting with honesty, ethics, and responsibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new ideas and approaches to learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Respect</h3>
              <p className="text-gray-600">
                Respecting eachothers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Responsibility</h3>
              <p className="text-gray-600">
                Becoming a responsible citizen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Book className="h-8 w-8 text-yellow-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Founded in 1995, Sunshine Academy has grown from a small local school to a renowned
                educational institution. Over the years, we have consistently evolved our teaching
                methods and facilities to meet the changing needs of our students.
              </p>
              <p className="text-gray-600">
                Today, we continue to build on our rich heritage while embracing modern educational
                practices and technology to prepare our students for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Global Impact</h2>
            <p className="text-xl text-gray-600">
              Preparing students to become global citizens and leaders of tomorrow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">International Recognition</h3>
              <p className="text-gray-600">
                Our students consistently achieve recognition in international competitions and events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Global Partnerships</h3>
              <p className="text-gray-600">
                We maintain strong partnerships with educational institutions worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">
                Regular cultural exchange programs enrich our students' global perspective.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default About;