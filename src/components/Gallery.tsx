import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "src/pics/presentation.jpg",
    title: "Book Review",
    description: "Our book review sessions ignite imaginations, turning readers into thoughtful critics and confident speakers. Through public speaking, students learn to inspire, lead, and engage — preparing them to take the spotlight wherever life takes them."
  },
  {
    id: 2,
    src: "src/pics/dance.jpg",
    title: "Dance, Music and Arts",
    description: "From brush strokes on a canvas to the soaring melodies of music and the dancing steps, our arts programs let students express who they are and explore endless creative possibilities."
  },
  {
    id: 3,
    src: "src/pics/futsal.jpg",
    title: "Futsal Ground & Basketball Court ",
    description: "Where champions are made and team spirit thrives. Whether dribbling a basketball or scoring goals on the futsal ground, our sports facilities are a playground for fitness, fun, and friendship."
  },
  {
    id: 4,
    src: "src/pics/sketing.jpg",
    title: "Roller Skating ",
    description: "Our skating rink is the perfect spot for students to roll into action. From beginners finding their feet to pros showing off their moves, there's room for everyone to glide their way to greatness."
  },
  {
    id: 5,
    src: "src/pics/meditation.jpg",
    title: "Yoga and Meditation",
    description: "We provide a tranquil space for students to reconnect with themselves. Through guided yoga sessions and meditation practices, students cultivate mindfulness, build focus, and develop emotional resilience for a balanced, healthy life."
  },
  {
    id: 6,
    src: "src/pics/swimming.jpg",
    title: "Swimming",
    description: "The school schedules swimming sessions for students during the summer season, allowing them to improve their swimming skills, build endurance, learn water safety, and gain confidence in the water."
  },
  {
    id: 7,
    src: "src/pics/sketing.jpg",
    title: "Field Trips ",
    description: "The school organizes field trips to provide students with hands-on learning experiences outside the classroom, fostering curiosity, teamwork, and a deeper understanding of various subjects."
  },
  {
    id: 8,
    src: "src/pics/scout.jpg",
    title: "School Clubs",
    description: "The school offers a variety of clubs, including English, Nepali Literature, and STEM, providing students with opportunities to explore their interests, enhance their skills, and engage in creative and intellectual activities beyond the regular curriculum."
  },
  {
    id: 9,
    src: "src/pics/horseride.jpg",
    title: "Horse Riding",
    description: "The school offers horse riding sessions where students learn essential riding skills, develop balance and coordination, and build confidence while enjoying an exciting and unique activity."
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.id)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.src}
                alt={galleryImages.find(img => img.id === selectedImage)?.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-600">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;