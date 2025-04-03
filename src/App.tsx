import React, { useState } from 'react';
import AuctionRoom from './components/AuctionRoom';
import TeamView from './components/TeamView';
import { Layout } from 'lucide-react';
import { Team, TEAMS, Player } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'auction' | 'teams'>('auction');
  const [teams, setTeams] = useState<Team[]>(TEAMS);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const updateTeams = (updatedTeams: Team[]) => {
    setTeams(updatedTeams);
  };

  const updatePlayerIndex = (index: number) => {
    setCurrentPlayerIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="w-6 h-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold">IPL Auction 2024</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentView('auction')}
                className={`px-4 h-full ${
                  currentView === 'auction'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Auction Room
              </button>
              <button
                onClick={() => setCurrentView('teams')}
                className={`px-4 h-full ${
                  currentView === 'teams'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Teams
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentView === 'auction' ? (
        <AuctionRoom 
          teams={teams} 
          updateTeams={updateTeams}
          currentPlayerIndex={currentPlayerIndex}
          updatePlayerIndex={updatePlayerIndex}
        />
      ) : (
        <TeamView teams={teams} />
      )}
    </div>
  );
}

export default App;