import React, { useState } from 'react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vibe');

  const tabs = [
    { id: 'vibe', label: 'Our Vibe' },
    { id: 'hub', label: 'Our Hub' },
    { id: 'features', label: 'Features' }
  ];

  // Custom colors
  const purpleColor = "#7859a6";
  const amberColor = "#ffb442";

  return (
    <div className="bg-amber-300 rounded-xl overflow-hidden relative" style={{ backgroundColor: amberColor }}>
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-cyan-600">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left content with illustration */}
          <div className="lg:w-2/5">
            <div className="bg-cyan-600 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full opacity-30" style={{ backgroundColor: amberColor }}></div>
              <div className="absolute left-12 -top-6 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: purpleColor }}></div>
              
              <h2 className="text-5xl font-extrabold text-white mb-3">About Us</h2>
              <p className="text-lg text-white mb-6">Where Creativity Meets Whimsy</p>
              
              <div className="relative z-10">
                <img 
                  src="imgs/logo-gif.gif" 
                  alt="Creative illustration character" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Right content with tabs */}
          <div className="lg:w-3/5">
            {/* Tab navigation */}
            <div className="flex space-x-2 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white hover:bg-cyan-50'
                  }`}
                  style={activeTab !== tab.id ? { color: "#7859a6" } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {activeTab === 'vibe' && (
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: purpleColor }}>Our Vibe</h3>
                  <p className="text-gray-700 mb-4">
                    At ADW Studium, we specialize in turning imagination into art. From vibrant, playful illustrations to custom products that elevate your everyday life.
                  </p>
                  <p className="text-gray-700">
                    If you're a book-loving, imaginative, and artistic person who enjoys expressing their passion through stylish, whimsical products, then ADW Studium is for you!
                  </p>
                </div>
              )}
              
              {activeTab === 'hub' && (
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: purpleColor }}>Our Hub</h3>
                  <p className="text-gray-700 mb-4">
                    Our hub is perfect for anyone looking for something unique—whether you're shopping for a one-of-a-kind gift or adding a creative flair to your personal collection.
                  </p>
                  <p className="text-gray-700">
                    Explore our Redbubble products for designs that combine storytelling with artistry. With more exciting creations on the horizon, ADW Studium is the place where art meets personality.
                  </p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: purpleColor }}>Creativity Meets Whimsy</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: 'rgba(120, 89, 166, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: purpleColor }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg" style={{ color: purpleColor }}>Artistic Expression</h4>
                        <p className="text-gray-600">Vibrant, playful illustrations that bring your imagination to life.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: 'rgba(120, 89, 166, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: purpleColor }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg" style={{ color: purpleColor }}>Unique Products</h4>
                        <p className="text-gray-600">Custom tote bags, phone cases, and planners that showcase your personality.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: 'rgba(120, 89, 166, 0.15)' }}>
                        <svg className="w-6 h-6" style={{ color: purpleColor }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg" style={{ color: purpleColor }}>Creative Flair</h4>
                        <p className="text-gray-600">One-of-a-kind gifts that combine storytelling with artistry.</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-center font-medium" style={{ color: purpleColor }}>
                    <strong>At ADW Studium, we transform imagination into art that speaks to your unique style.</strong>
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full opacity-20 bg-cyan-600"></div>
      <div className="absolute top-24 right-24 w-12 h-12 rounded-full opacity-30" style={{ backgroundColor: purpleColor }}></div>
    </div>
  );
}