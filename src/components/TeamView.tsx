import React from 'react';
import { Team } from '../types';
import { Users } from 'lucide-react';

interface TeamViewProps {
  teams: Team[];
}

export default function TeamView({ teams }: TeamViewProps) {
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(teams[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">IPL Teams</h1>
          <Users className="w-8 h-8 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 space-y-4">
            {teams.map(team => (
              <button
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                className={`w-full text-left p-4 rounded-lg transition ${
                  selectedTeam.id === team.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{team.name}</p>
                    <p className="text-sm opacity-80">Budget: ₹{team.budget}L</p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-bold">{selectedTeam.name}</h2>
              <p className="text-gray-600">Remaining Budget: ₹{selectedTeam.budget}L</p>
            </div>

            {selectedTeam.players.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No players purchased yet
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTeam.players.map(player => (
                  <div
                    key={player.id}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.role}</p>
                      <p className="text-sm font-semibold text-green-600">
                        ₹{player.currentBid}L
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}