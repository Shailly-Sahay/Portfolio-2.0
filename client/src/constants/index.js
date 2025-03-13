import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
export const calculateSizes = (
  isSmall,
  isMobile,
  isTablet,
  isLargeTablet,
  isLaptop,
  isDesktop
) => {
  return {
    deskScale: isSmall ? 0.03 : isMobile ? 0.04 : 0.05,
    deskPosition: isSmall
      ? [0.5, -3, 0]
      : isMobile
      ? [0.5, -4, 0]
      : [0.25, -4.5, 0],
    cubePosition: isSmall
      ? [3, -7, -10] // Small screens (mobile)
      : isMobile
      ? [4, -4, -7] // Regular mobile screens
      : isTablet
      ? [5, -4, -1] // Tablets
      : isLargeTablet
      ? [6, -4, -1] // Large tablets / small laptops
      : isLaptop
      ? [7, -4, 0] // Standard laptops
      : isDesktop
      ? [9, -4, 0] // Regular desktops
      : [10, 3, 0],
    reactLogoPosition: isSmall
      ? [3, 5, -5] // Small screens (mobile)
      : isMobile
      ? [3, 5, -2] // Regular mobile screens
      : isTablet
      ? [5, 4, 0] // Tablets
      : isLargeTablet
      ? [5, 4, 0] // Large tablets / small laptops
      : isLaptop
      ? [8, 3.5, 0] // Standard laptops
      : isDesktop
      ? [9, 3, 0] // Regular desktops
      : [10, 3, 0],
    ringPosition: isSmall
      ? [-6, 14, -20] // Small screens (mobile)
      : isMobile
      ? [-9, 14, -14] // Regular mobile screens
      : isTablet
      ? [-12, 10, -10] // Tablets
      : isLargeTablet
      ? [-16, 11, -10] // Large tablets / small laptops
      : isLaptop
      ? [-20, 10, -10] // Standard laptops
      : isDesktop
      ? [-16, 7, 0] // Regular desktops
      : [-16, 7, 0],
    targetPosition: isSmall
      ? [-3, -7, -5] // Small screens (mobile)
      : isMobile
      ? [-4, -6, -5] // Regular mobile screens
      : isTablet
      ? [-5, -5, -1] // Tablets
      : isLargeTablet
      ? [-6, -5, -1] // Large tablets / small laptops
      : isLaptop
      ? [-7, -5, -1] // Standard laptops
      : isDesktop
      ? [-9, -5, -1] // Regular desktops
      : [-9, -5, -1],
  };
};

// isSmall: 0 - 440
// isMobile: 441 - 768
// isTablet: 769 - 1024
// isLargeTablet: 1025 - 1280
// isLaptop: 1281 - 1440
// isDesktop: 1441 - 1920
// isLargeScreen: 1921 - ..
