import React from 'react';
import { Instagram } from "lucide-react";
import { SiTiktok, SiRedbubble } from 'react-icons/si';

export default function SocialMediaBanner() {
  return (
    <div className="relative h-64 w-full bg-red-400">
      {/* This would be replaced with your actual background image */}
      <div className="absolute inset-0 bg-red-400">
        {/* Background image would go here */}
      </div>
      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-6 text-center">
        <h3 className="text-xl font-bold text-white">Follow us on social media</h3>
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-8">
          {/* Instagram Icon */}
          <a href="#" className="text-white hover:text-gray-200">
            <Instagram className="h-8 w-8" viewBox="0 0 24 24"/>
          </a>
          {/* TikTok Icon */}
          <a href="#" className="text-white hover:text-gray-200">
            <SiTiktok className="h-8 w-8" viewBox="0 0 24 24"/>
          </a>
          {/* Redbubble Icon */}
          <a href="#" className="text-white hover:text-gray-200">
            <SiRedbubble className="h-8 w-8" viewBox="0 0 24 24"/>
          </a>
        </div>
      </div>
    </div>
  );
}