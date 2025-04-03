import React, { useState } from 'react';
import { Player, Team } from '../types';
import { Gavel } from 'lucide-react';

const INITIAL_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'MS Dhoni',
    basePrice: 200,
    currentBid: 200,
    role: 'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Virat Kohli',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsman',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    name: 'Hardik Pandya',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 5,
    name: 'Kiero n P o llard',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 6,
    name: 'Suresh Raina',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 7,
    name: 'Jasprit Bumrah',
    basePrice: 200,
    currentBid: 200,
    role: 'Bo wler',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 8,
    name: 'ABD  Villiers',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 9,
    name: 'Chris Gayle',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 10,
    name: 'L asith M alinga',
    basePrice: 200,
    currentBid: 200,
    role: 'Bo wler',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 11,
    name: 'D av id W arner',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 12,
    name: 'Yuzv endra Chahal',
    basePrice: 200,
    currentBid: 200,
    role: 'Bo wler',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 13,
    name: 'Shubm an Gill',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 14,
    name: 'Rutraj Gaikw ad',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 15,
    name: 'SKY',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 16,
    name: 'Trav is Head',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 17,
    name: 'Sai Sudharsan',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 18,
    name: 'M anish P andey',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 19,
    name: 'Shrey as Iy er',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 20,
    name: 'Nitish Rana',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 21,
    name: 'Rinku Singh',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 22,
    name: 'Tilak Varm a',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 23,
    name: 'Shikar D hawan',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 24,
    name: 'M ayank Agarwal',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 25,
    name: 'Faf D U P lessis',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 26,
    name: 'D way ne Smit h',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 27,
    name: 'Jaso n Ro y',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 28,
    name: 'Tim  D av id',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 29,
    name: 'Shim ro n Hetm y er',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 30,
    name: 'Stev e Smit h',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 31,
    name: 'Ky le M aye rs',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 32,
    name: 'Venkate sh Iyer',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 33,
    name: 'P rithv i Shaw',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 34,
    name: 'Jake Fraser',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 35,
    name: 'Sharukh Khan',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 36,
    name: 'Ambati Ray udu',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 37,
    name: 'Ro bin Ut happa',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsm an',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 38,
    name: 'Rishab P ant',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 39,
    name: 'Ishan K ishan',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 40,
    name: 'KL  Rahul',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 41,
    name: 'Sanju Sam so n',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 42,
    name: 'D inesh K arthick',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 43,
    name: 'Heinrich K lassen',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 44,
    name: 'W Saha',
    basePrice: 100,
    currentBid: 100,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 45,
    name: 'P  Salt',
    basePrice: 100,
    currentBid: 100,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 46,
    name: 'N P o o ran',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 47,
    name: 'R Gurbaz',
    basePrice: 100,
    currentBid: 100,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 48,
    name: 'J Bairsto w',
    basePrice: 100,
    currentBid: 100,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 49,
    name: 'T Stubbs',
    basePrice: 100,
    currentBid: 100,
    role: 'Wk',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 50,
    name: 'J Buttler',
    basePrice: 200,
    currentBid: 200,
    role: 'WK',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 51,
    name: 'R Ashwin',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 52,
    name: 'R Jadeja',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 53,
    name: 'A P ate l',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 54,
    name: 'R T ew atia',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 55,
    name: 'W Sundar',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 56,
    name: 'W Hasaranga',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 57,
    name: 'W Jacks',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 58,
    name: 'M  Jansen',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 59,
    name: 'K P andy a',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 60,
    name: 'Sunil Narine',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 61,
    name: 'L  L ivingsto ne',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 62,
    name: 'A Russel',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 63,
    name: 'M  Santner',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 64,
    name: 'M  Ali',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 65,
    name: 'M  M arsh',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 66,
    name: 'D  Ho o da',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 67,
    name: 'Rashid K han',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 68,
    name: 'Ben Sto ke s',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 69,
    name: 'D way ne Bravo',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 70,
    name: 'C Gree n',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 71,
    name: 'B K um ar',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 72,
    name: 'T D eshpande',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 73,
    name: 'A Singh',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 74,
    name: 'V Chakrav athy',
    basePrice: 200,
    currentBid: 200,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 75,
    name: 'M  Siraj',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 76,
    name: 'M  Sharm a',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 77,
    name: 'U Y adav',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 78,
    name: 'J Unadkat',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 79,
    name: 'A M ishra',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 80,
    name: 'M  K um ar',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 81,
    name: 'A khan',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 82,
    name: 'S Kisho re',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 83,
    name: 'H Rana',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 84,
    name: 'K Sharm a',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 85,
    name: 'T Bo ult',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 86,
    name: 'M  T hee kshana',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 87,
    name: 'M  Rahm an',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 88,
    name: 'M  Starc',
    basePrice: 200,
    currentBid: 200,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 89,
    name: 'M ujee b UR Rahm an',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 90,
    name: 'F Faro o qi',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 91,
    name: 'N UL  Haq',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 92,
    name: 'M  W o o d',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 93,
    name: 'H Singh',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 94,
    name: 'L  Ngidi',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 95,
    name: 'A No rtje',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 96,
    name: 'L  Ferguso n',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 97,
    name: 'A Zam pa',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 98,
    name: 'I Sharm a',
    basePrice: 100,
    currentBid: 100,
    role: 'P ace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
];


interface AuctionRoomProps {
  teams: Team[];
  updateTeams: (teams: Team[]) => void;
  currentPlayerIndex: number;
  updatePlayerIndex: (index: number) => void;
}

export default function AuctionRoom({ teams, updateTeams, currentPlayerIndex, updatePlayerIndex }: AuctionRoomProps) {
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [showSoldAnimation, setShowSoldAnimation] = useState(false);
  const [soldToTeam, setSoldToTeam] = useState<Team | null>(null);

  const currentPlayer = players[currentPlayerIndex];

  const increaseBid = () => {
    if (!currentPlayer) return;
    setPlayers(players.map((p, idx) => 
      idx === currentPlayerIndex 
        ? { ...p, currentBid: p.currentBid + 50 }
        : p
    ));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (showSoldAnimation) return; 

    const key = parseInt(e.key);
    if (isNaN(key)) return;

    const team = teams.find(t => t.keyNumber === key);
    if (!team || !currentPlayer) return;

    if (team.budget < currentPlayer.currentBid) {
      alert(`${team.name} doesn't have enough budget!`);
      return;
    }

    setSoldToTeam(team);
    setShowSoldAnimation(true);

    const updatedTeams = teams.map(t => {
      if (t.id === team.id) {
        return {
          ...t,
          budget: t.budget - currentPlayer.currentBid,
          players: [...t.players, { ...currentPlayer, soldTo: t.shortName }]
        };
      }
      return t;
    });

    const updatedPlayers = players.map((p, idx) => 
      idx === currentPlayerIndex ? { ...p, soldTo: team.shortName } : p
    );

    setTimeout(() => {
      updateTeams(updatedTeams);
      setPlayers(updatedPlayers);
      setShowSoldAnimation(false);
      setSoldToTeam(null);
      
      if (currentPlayerIndex < players.length - 1) {
        updatePlayerIndex(currentPlayerIndex + 1);
      }
    }, 2000);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPlayerIndex, players, teams, showSoldAnimation]);

  if (!currentPlayer) return <div>Auction Complete!</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 relative">
          {showSoldAnimation && soldToTeam && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="text-center animate-bounce">
                <h2 className="text-6xl font-bold text-white mb-4">SOLD!</h2>
                <p className="text-3xl text-white" style={{ color: soldToTeam.color }}>
                  to {soldToTeam.name}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">IPL Auction 2024</h1>
            <Gavel className="w-8 h-8 text-yellow-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src={currentPlayer.image} 
                alt={currentPlayer.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center">
                <h2 className="text-2xl font-bold">{currentPlayer.name}</h2>
                <p className="text-gray-600">{currentPlayer.role}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-600">Base Price</p>
                <p className="text-3xl font-bold">₹{currentPlayer.basePrice}L</p>
              </div>
              
              <div>
                <p className="text-lg text-gray-600">Current Bid</p>
                <p className="text-4xl font-bold text-green-600">₹{currentPlayer.currentBid}L</p>
              </div>
              
              <button
                onClick={increaseBid}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                disabled={showSoldAnimation}
              >
                Increase Bid (+50L)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
