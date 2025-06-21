import React from 'react';
import { FaReact } from 'react-icons/fa';

import type { Experience, Project, Skill } from '@/types/types';

import {
  Apollo,
  BlogWebsite,
  Bootstrap,
  CSS3,
  Docker,
  Express,
  Framer,
  GitHub,
  GraphQL,
  HTML5,
  Javascript,
  Lusion,
  MaterialUI,
  MiltonFramer,
  // Jenkins,
  // Stripe,
  MITScratchClone,
  MongoDB,
  NEXTJS,
  Node,
  ReactIcon,
  Redux,
  Spotify,
  Storybook,
  Tailwind,
  Typescript,
  Vite,
  Zustand
} from './images';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
];

export const experiencesData: Experience[] = [
  {
    company: 'Apptware',
    location: 'Pune, India',
    designation: 'Associate React (MERN) Developer',
    description:
      'Developed full-stack web applications using MongoDB, Express.js, React, and Node.js. Built responsive user interfaces and RESTful APIs.',
    icon: React.createElement(FaReact),
    date: `February 2022 - present  (${new Date().getFullYear() - 2022}  Years)`
  },
  {
    company: 'Quantum Hunts',
    location: 'Pune, India',
    designation: 'React Developer',
    description:
      'Worked on React-based projects with focus on user experience and modern UI/UX principles. Utilized Next.js for performance optimization.',
    icon: React.createElement(FaReact),
    date: 'July 2021 - October 2023 (4 Months)'
  },
  {
    company: 'Samtej Industries LLP',
    location: 'India',
    designation: 'React Developer',
    description:
      'Focused on software development, data structures, algorithms, and web technologies.',
    icon: React.createElement(FaReact),
    date: 'October 2021 - December 2021 (3 Months)'
  },
  {
    company: 'Indian Society of Technical Education',
    location: 'Pune, India',
    designation: 'React Developer & Web UI Content Writer',
    description:
      'Worked on React-based projects with focus on user experience and modern UI/UX principles. Utilized Next.js for performance optimization.',
    icon: React.createElement(FaReact),
    date: 'September 2021 - April 2022 (8 Months)'
  }
];

export const projectsData: Project[] = [
  {
    title: 'MIT Scratch Clone',
    description:
      'Developed a clone of the MIT Scratch website with React flow nodes in place of blocks',
    tags: ['React JS', 'Node.js', 'React Flow', 'Custom Events'],
    image: MITScratchClone.src,
    githubUrl: 'https://github.com/ARJ2160/MIT-Scratch-Clone',
    liveUrl: 'https://cool-twilight-ce65a1.netlify.app/'
  },
  {
    title: 'Next JS Blog V2',
    description:
      'Built a blog website using NEXT JS and Tailwind CSS. Developed a RESTful Express Backend along with a MongoDB database.',
    tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Jenkins', 'Docker'],
    image: BlogWebsite.src,
    githubUrl: 'https://github.com/ARJ2160/Blog-V2',
    liveUrl: 'https://blog-v2-olive.vercel.app/'
  },
  {
    title: 'Framer Milton Clone',
    description:
      'Developed a clone of Milton Framer website using Vite and Tailwind CSS. Used Framer motion to add animation effects.',
    tags: ['Vite', 'React JS', 'Tailwind', 'Framer Motion'],
    image: MiltonFramer.src,
    githubUrl: 'https://github.com/ARJ2160/Milton-Framer-Template',
    liveUrl: 'https://milton-framer-template.vercel.app/'
  },
  {
    title: 'NEXT JS Spotify Clone',
    description:
      'Created a clone of the Spotify website with NEXT JS, Tailwind CSS, NEXT Auth, and Spotify API',
    tags: ['NEXT JS', 'React JS', 'Next Auth', 'Tailwind CSS', 'Spotify API'],
    image: Spotify.src,
    githubUrl: 'https://github.com/ARJ2160/Next-Spotify-Clone',
    liveUrl: 'https://next-spotify-clone-xi.vercel.app/'
  },
  {
    title: 'Lusion React + Tailwind Clone',
    description:
      'Developed an emulation of the "Lusion" website using React and Tailwind. Integrated a cart functionality with Stripe API for payments',
    tags: ['React JS', 'Tailwind CSS', 'Stripe API'],
    image: Lusion.src,
    githubUrl: 'https://github.com/ARJ2160/Tailwind-Lusion',
    liveUrl: 'https://tailwind-lusion.vercel.app/'
  }
];

export const skillsData: Skill[] = [
  { name: 'React JS', icon: ReactIcon },
  { name: 'Next JS', icon: NEXTJS },
  { name: 'TypeScript', icon: Typescript },
  { name: 'JavaScript', icon: Javascript },
  { name: 'Node JS', icon: Node },
  { name: 'Express JS', icon: Express },
  { name: 'Redux Toolkit', icon: Redux },
  { name: 'Zustand', icon: Zustand },
  { name: 'MongoDB', icon: MongoDB },
  { name: 'GraphQL', icon: GraphQL },
  { name: 'Apollo', icon: Apollo },
  { name: 'Docker', icon: Docker },
  { name: 'Git', icon: GitHub },
  { name: 'Vite', icon: Vite },
  { name: 'Storybook', icon: Storybook },
  { name: 'Framer Motion', icon: Framer },
  { name: 'Material UI', icon: MaterialUI },
  { name: 'Tailwind CSS', icon: Tailwind },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'HTML', icon: HTML5 },
  { name: 'CSS', icon: CSS3 }
  // { name: 'Jenkins', icon: Jenkins },
  // { name: 'Stripe', icon: Stripe }
];
