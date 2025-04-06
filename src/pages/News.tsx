import React, { useState } from 'react';
import Newsletter from '../components/Newsletter';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "New STEM Lab Opening Ceremony",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    excerpt: "Sunshine Academy proudly announces the opening of our state-of-the-art STEM laboratory...",
    category: "Campus News",
    content: `Our new STEM laboratory represents a significant milestone in our commitment to providing cutting-edge education. The facility features advanced equipment including 3D printers, robotics kits, and digital microscopes.

    The opening ceremony was attended by distinguished guests from the education sector, government officials, and industry experts. Students demonstrated various projects, showcasing the potential of this new facility.
    
    This investment in STEM education will enable our students to:
    - Conduct advanced scientific experiments
    - Learn robotics and programming
    - Develop critical thinking skills
    - Prepare for future careers in technology
    
    The lab will be available to all students from grades 6-12, with specialized programs for different age groups.`
  },
  {
    id: 2,
    title: "Students Win National Science Competition",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&q=80",
    excerpt: "Our talented students brought home the first prize in the National Science Competition...",
    category: "Achievements",
    content: `We are proud to announce that our students have won first place in the National Science Competition 2024. The team, consisting of Sarah Johnson, Michael Chen, and Emily Rodriguez, impressed the judges with their innovative project on sustainable energy.

    Their project, "Solar-Powered Water Purification System," demonstrated a cost-effective solution for providing clean water to remote areas. The judges particularly praised the practical applications and environmental benefits of their invention.
    
    Key achievements:
    - First place in the national competition
    - Special recognition for innovation
    - Invitation to international science fair
    - Research grant for further development
    
    This victory reflects our school's commitment to excellence in science education and our students' dedication to making a positive impact on society.`
  },
  {
    id: 3,
    title: "Annual Arts Festival Announcement",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    excerpt: "Mark your calendars for our upcoming Annual Arts Festival, featuring student performances...",
    category: "Events",
    content: `The much-anticipated Annual Arts Festival is scheduled for April 15-20, 2024. This year's theme is "Cultural Harmony," celebrating diversity through various art forms.

    Festival highlights:
    - Student art exhibitions
    - Musical performances
    - Theater productions
    - Dance recitals
    - Cultural workshops
    
    Special guest performances by renowned artists and workshops by industry professionals will provide unique learning opportunities for our students.
    
    Schedule:
    - Day 1: Opening ceremony and art exhibition
    - Day 2-3: Music and dance performances
    - Day 4-5: Theater productions
    - Day 6: Closing ceremony and awards`
  },
  {
    id: 4,
    title: "New Environmental Initiative Launched",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    excerpt: "Sunshine Academy launches new green initiative to promote environmental awareness...",
    category: "Campus News",
    content: `Sunshine Academy is proud to announce our new environmental initiative, "Green Campus 2024." This comprehensive program aims to make our campus more sustainable and environmentally friendly.

    Key initiatives:
    - Solar panel installation
    - Waste reduction program
    - School garden project
    - Recycling awareness campaign
    
    Students will be actively involved in:
    - Maintaining the school garden
    - Managing recycling programs
    - Conducting environmental awareness campaigns
    - Monitoring energy usage
    
    This initiative aligns with our commitment to environmental education and sustainability.`
  },
  {
    id: 5,
    title: "International Exchange Program Success",
    date: "February 25, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    excerpt: "Our first international exchange program with schools in Japan concludes successfully...",
    category: "International",
    content: `The inaugural international exchange program with Sakura High School in Tokyo has successfully concluded. Ten students from each school participated in this month-long cultural exchange program.

    Program highlights:
    - Cultural immersion activities
    - Language exchange sessions
    - Joint academic projects
    - Family homestay experience
    
    This program has opened new doors for international collaboration and cultural understanding among our students.`
  },
  {
    id: 6,
    title: "Sports Day Champions Crowned",
    date: "February 20, 2024",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    excerpt: "Annual Sports Day concludes with record-breaking performances and new champions...",
    category: "Sports",
    content: `The Annual Sports Day 2024 was a grand success with unprecedented participation and several new school records being set.

    Highlights:
    - 15 new school records
    - 100% student participation
    - Inter-house championship
    - Special para-sports events
    
    Winners:
    - Overall Champions: Blue House
    - Best Athlete (Boys): John Smith
    - Best Athlete (Girls): Maria Garcia
    
    The event showcased our students' sporting excellence and team spirit.`
  }
];

function News() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const article = selectedArticle ? newsArticles.find(a => a.id === selectedArticle) : null;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {!selectedArticle ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">News & Updates</h1>
              <p className="text-xl text-gray-600">
                Stay updated with the latest happenings at Sunshine Academy
              </p>
            </div>

            {/* Featured Article */}
            <div className="mb-16">
              <div 
                className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedArticle(newsArticles[0].id)}
              >
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <div className="p-8 text-white">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                      {newsArticles[0].category}
                    </span>
                    <h2 className="text-3xl font-bold mt-4 mb-2">{newsArticles[0].title}</h2>
                    <p className="text-gray-200 mb-4">{newsArticles[0].excerpt}</p>
                    <p className="text-sm">{newsArticles[0].date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.slice(1).map(article => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center text-gray-600 hover:text-yellow-500 mb-8 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to News
            </button>
            
            <img
              src={article?.image}
              alt={article?.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {article?.category}
              </span>
              
              <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-6">{article?.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-8">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="mr-6">{article?.date}</span>
                <Clock className="h-5 w-5 mr-2" />
                <span>5 min read</span>
              </div>
              
              <div className="prose max-w-none">
                {article?.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default News;