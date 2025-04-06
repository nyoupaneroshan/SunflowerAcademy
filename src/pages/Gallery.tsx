import React, { useState } from 'react';
import { X, Camera, Grid, Filter } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const categories = [
  "All",
  "Classrooms",
  "Labs",
  "Sports",
  "Events",
  "Campus Life"
];

const galleryImages = [
  {
    id: 1,
    src: "src/pics/futsal.jpg",
    title: "Futsal",
    description: "",
    category: "Sports"
  },
  {
    id: 2,
    src: "src/pics/basketball.jpg",
    title: "Science Lab",
    description: "Fully equipped science laboratory for practical learning and experiments.",
    category: "Labs"
  },
  {
    id: 3,
    src: "src/pics/basketball.jpg",
    title: "Library",
    description: "Extensive collection of books, journals, and digital resources.",
    category: "Labs"
  },
  {
    id: 4,
    src: "src/pics/basketball.jpg",
    title: "Sports Facilities",
    description: "Modern sports facilities including basketball court, football field, and indoor games.",
    category: "Sports"
  },
  {
    id: 5,
    src: "src/pics/basketball.jpg",
    title: "Computer Lab",
    description: "Modern computer lab with latest hardware and software for digital learning.",
    category: "Labs"
  },
  {
    id: 6,
    src: "src/pics/basketball.jpg",
    title: "Playground",
    description: "Spacious playground for outdoor activities and physical education.",
    category: "Sports"
  },
  {
    id: 7,
    src: "src/pics/basketball.jpg",
    title: "Annual Day Celebration",
    description: "Students showcasing their talents during our annual day celebration.",
    category: "Events"
  },
  {
    id: 8,
    src: "src/pics/basketball.jpg",
    title: "Campus Life",
    description: "Students enjoying their time in our beautiful campus environment.",
    category: "Campus Life"
  },
  {
    id: 9,
    src: "src/pics/basketball.jpg",
    title: "Study Groups",
    description: "Students participating in collaborative learning sessions.",
    category: "Campus Life"
  },
  {
    id: 10,
    src: "src/pics/basketball.jpg",
    title: "Chemistry Lab",
    description: "Students conducting experiments in our well-equipped chemistry lab.",
    category: "Labs"
  },
  {
    id: 11,
    src: "src/pics/basketball.jpg",
    title: "Sports Day",
    description: "Annual sports day celebrations with various athletic events.",
    category: "Events"
  },
  {
    id: 12,
    src: "src/pics/basketball.jpg",
    title: "Smart Classroom",
    description: "Interactive learning environment with modern educational technology.",
    category: "Classrooms"
  }
];

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="absolute inset-0">
          <img
            src="src/pics/basketball.jpg"
            alt="Gallery Header"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-xl text-white">
              Explore our facilities and campus life through our photo gallery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Categories */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'masonry' ? 'bg-yellow-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-4 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto'
        }`}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`relative cursor-pointer group overflow-hidden rounded-lg ${
                viewMode === 'masonry' && image.id % 3 === 0 ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl font-semibold text-center mb-2">{image.title}</h3>
                <span className="text-yellow-300 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {galleryImages.find(img => img.id === selectedImage)?.category}
                  </span>
                </div>
                <p className="text-gray-600">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default GalleryPage;