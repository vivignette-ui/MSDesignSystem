import { useState } from 'react';

// Import all the individual nav components
import HomeUnselected from './nav-items/HomeUnselected';
import HomeSelected from './nav-items/HomeSelected';
import ServiceUnselected from './nav-items/ServiceUnselected';
import ServiceSelected from './nav-items/ServiceSelected';
import LocationUnselected from './nav-items/LocationUnselected';
import LocationSelected from './nav-items/LocationSelected';
import SocialUnselected from './nav-items/SocialUnselected';
import SocialSelected from './nav-items/SocialSelected';
import HelpUnselected from './nav-items/HelpUnselected';
import HelpSelected from './nav-items/HelpSelected';

type NavItem = 'home' | 'service' | 'location' | 'social' | 'help';

export default function BottomNavigation() {
  const [selected, setSelected] = useState<NavItem>('home');

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4">
      <div className="relative bg-[rgba(25,27,48,0.55)] backdrop-blur-lg rounded-[51.342px] px-6 py-2 shadow-2xl">
        <div className="relative h-[60px] flex items-center gap-6">
          {/* Home */}
          <button
            onClick={() => setSelected('home')}
            className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform active:scale-95"
          >
            {selected === 'home' ? <HomeSelected /> : <HomeUnselected />}
          </button>

          {/* Service */}
          <button
            onClick={() => setSelected('service')}
            className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform active:scale-95"
          >
            {selected === 'service' ? <ServiceSelected /> : <ServiceUnselected />}
          </button>

          {/* Location */}
          <button
            onClick={() => setSelected('location')}
            className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform active:scale-95"
          >
            {selected === 'location' ? <LocationSelected /> : <LocationUnselected />}
          </button>

          {/* Social */}
          <button
            onClick={() => setSelected('social')}
            className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform active:scale-95"
          >
            {selected === 'social' ? <SocialSelected /> : <SocialUnselected />}
          </button>

          {/* Help */}
          <button
            onClick={() => setSelected('help')}
            className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform active:scale-95"
          >
            {selected === 'help' ? <HelpSelected /> : <HelpUnselected />}
          </button>
        </div>
      </div>
    </div>
  );
}
