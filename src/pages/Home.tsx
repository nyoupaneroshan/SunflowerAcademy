import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, School, FlaskRound as Flask, BookOpen, Award } from 'lucide-react';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';

const slides = [
  {
    image: "https://raw.githubusercontent.com/nyoupaneroshan/SunflowerAcademy/refs/heads/main/public/basketball.jpg",
    title: "Basketball",
    description: "Students playing basketball"
  },
  {
    image: "https://raw.githubusercontent.com/nyoupaneroshan/SunflowerAcademy/refs/heads/main/public/dance.jpg",
    title: "",
    description: ""
  },
  {
    image: "https://raw.githubusercontent.com/nyoupaneroshan/SunflowerAcademy/refs/heads/main/public/holi.jpg",
    title: "",
    description: ""
  }
];

const features = [
  {
    icon: School,
    title: "Digital Classrooms",
    description: "The digital classroom is equipped with advanced technology to enhance learning through interactive lessons, multimedia content, and online resources, creating an engaging and modern educational experience for students."
  },
  {
    icon: Flask,
    title: "Science Labs",
    description: "Get your hands messy and your mind curious! From bubbling chemistry experiments to electrifying physics demos, our fully-equipped lab lets students bring science to life through hands-on learning and discovery."
  },
  {
    icon: BookOpen,
    title: "Transportation",
    description: "The school offers convenient transportation services to ensure a comfortable and efficient commute for students, minimizing travel time."
  },
  {
    icon: Award,
    title: "Spacious Playground",
    description: "The campus includes a spacious playground with facilities for basketball, volleyball, skating, and futsal, offering students plenty of opportunities for sports and outdoor activities."
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Sunshine Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sunflower Academy offers a well-rounded education that blends academic excellence with creativity, innovation, and real-world skills. With personalized mentoring, interactive classrooms, modern facilities and diverse extracurriculars, we nurture confident, responsible, and globally minded learners. Our supportive environment ensures every student thrives academically, emotionally, and socially—preparing them for future success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Beyond Classroom</h2>
            <p className="text-xl text-gray-600">Take a virtual tour of our Activities</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Curriculum</h3>
              <p className="text-gray-600">
              Balanced and diverse, emphasizing STEM, humanities, and life skills to prepare students for the real world.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Mentoring</h3>
              <p className="text-gray-600">
              Our dedicated mentors guide each student on a journey of self-discovery, identifying strengths and tackling challenges head-on. With personalized attention, we help unlock every individual’s full potential.
              </p>
            </div>
           
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Classrooms</h3>
              <p className="text-gray-600">
              Our interactive classrooms are buzzing with discussions, creative brainstorming, and hands-on activities. It's a dynamic environment where curiosity leads the way.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Counseling</h3>
              <p className="text-gray-600">
              The teachers conduct classes while understanding the students' classroom requirements. They hold frequent counseling sessions for students and inform the parents, highlighting the support needed from them as well.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Learning Beyond Books</h3>
              <p className="text-gray-600">
              By fostering creativity, resilience, and confidence, we prepare students not just for exams but for life itself — ready to rise to any challenge with determination and heart.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Computer Lab</h3>
              <p className="text-gray-600">
              Sunflower Academy boasts a well-equipped Computer Lab, offering students access to modern technology and tools for enhancing their digital skills and learning experience.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Library </h3>
              <p className="text-gray-600">
              To be a leading institution recognized for academic excellence, holistic development, and innovation, empowering students to thrive as compassionate leaders and changemakers in a dynamic global community.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default Home;
