export interface Player {
  id: number;
  name: string;
  basePrice: number;
  currentBid: number;
  soldTo?: string;
  role: string;
  image: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  budget: number;
  color: string;
  players: Player[];
  keyNumber?: number;  // Made optional
  keyLetter?: string;  // Added new optional field
}

export const TEAMS: Team[] = [
  { id: 1, name: 'Chennai Super Kings', shortName: 'CSK', budget: 5000, color: '#FFD700', players: [], keyNumber: 1 },
  { id: 2, name: 'Mumbai Indians', shortName: 'MI', budget: 5000, color: '#004BA0', players: [], keyNumber: 2 },
  { id: 3, name: 'Royal Challengers Bangalore', shortName: 'RCB', budget: 5000, color: '#FF0000', players: [], keyNumber: 3 },
  { id: 4, name: 'Rising Pune Super Gaints', shortName: 'RPS', budget: 5000, color: '#800080', players: [], keyNumber: 4 }, // Changed to purple
  { id: 5, name: 'Delhi Capitals', shortName: 'DC', budget: 5000, color: '#0078BC', players: [], keyNumber: 5 },
  { id: 6, name: 'Punjab Kings', shortName: 'PBKS', budget: 5000, color: '#ED1B24', players: [], keyNumber: 6 },
  { id: 7, name: 'Rajasthan Royals', shortName: 'RR', budget: 5000, color: '#FF1493', players: [], keyNumber: 7 },
  { id: 8, name: 'Sunrisers Hyderabad', shortName: 'SRH', budget: 5000, color: '#FF822A', players: [], keyNumber: 8 },
  { id: 9, name: 'Gujarat Titans', shortName: 'GT', budget: 5000, color: '#1B2133', players: [], keyNumber: 9 },
  { id: 10, name: 'Lucknow Super Giants', shortName: 'LSG', budget: 5000, color: '#A7D5F6', players: [], keyNumber: 0 },
  { id: 11, name: 'Pune Warriors India', shortName: 'PWI', budget: 5000, color: '#008000', players: [], keyLetter: 'a' }, // Changed to green
  { id: 12, name: 'Deccan Chargers', shortName: 'DEC', budget: 5000, color: '#000000', players: [], keyLetter: 'b' } // Changed to black
];