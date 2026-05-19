import BottomNavigation from './components/BottomNavigation';

export default function App() {
  return (
    <div className="size-full bg-gradient-to-br from-[#1a1d2e] via-[#252838] to-[#1f2233] flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center p-8 pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Navigation Demo
          </h1>
          <p className="text-gray-400 max-w-md">
            Click on any navigation item below to see the selected state change.
            The active item is highlighted in blue.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}