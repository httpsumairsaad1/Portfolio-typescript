import PROJECT_IMAGE from "../assets/projects/index";

const PROJECTS: IProjectInfo[] = [
  {
    id: 1,
    name: "Hamdard",
    icon: PROJECT_IMAGE.hamdard_icon,
    description: [
      "Hamdard Donation, A website where companies can easily donate to Hamdard through the Hamdard website. This makes it simple for businesses to support the organization's community projects.",
      `🌐 Easy online donation through the Hamdard website
💸 Secure payment processing for company donations
📊 Transparent tracking of donation impact
📄 Instant receipts for tax purposes`,
      `🤝 Support for various social and community projects
📅 Regular updates on funded initiatives
🏆 Recognition for corporate donors
💬 Customer support for donation queries
`,
    ],
    imgUrl: {
      light: PROJECT_IMAGE.hamdard_light,
      dark: PROJECT_IMAGE.hamdard_dark,
    },
    techStack: ["ReactJs", "Material UI", "Nodejs", "Apex Charts", "MongoDB"],
    githubLink: "https://github.com/httpsumairsaad1/Hamdard-Donation",

    liveLink: "https://www.linkedin.com/posts/umair-saad-79393a235_mernstack-databasemanagement-donationplatform-activity-7203985541896278017-EGRs?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 1,
    name: "DoubleAI",

    icon: PROJECT_IMAGE.app_icon,
    description: [
      "DoubleAI is a video-sharing app where users can post videos with AI-generated prompts, explore trending content, and manage profiles. It uses React Native and Expo for the frontend and Appwrite for backend services like authentication and data storage.",
      `🎥 Post videos with AI-generated prompts and titles
📈 Browse and explore trending content from the community
👤 Manage and customize user profiles`,
  `🔍 Search for videos posted by others
🔐 Secure sign-in and sign-up authentication
⚙️ Enhanced user experience with loading indicators and empty state designs`,
    ],
    imgUrl: {
      light: PROJECT_IMAGE.app,
      dark: PROJECT_IMAGE.app_dark,
    },
    techStack: ["React-Native", "Appwrite"],
    githubLink: "https://github.com/httpsumairsaad1/doubleAI-app-react-native",
    liveLink: "",
  },

  {
    id: 1,
    name: "Sudocodes",
    icon: PROJECT_IMAGE.sudocodes_icon,
    description: [
      "Sudocodes, a platform where super users can code and collaborate, and users can hire professional developers for development and UI/UX design. It offers reviews and connects clients with skilled developers for high-quality project execution.",
      `🌐 Collaborative coding and project management
    💼 Hire expert developers for development and design
    🗨️ User reviews and feedback on developers
    🔍 Professional services for UI/UX design and more`,
      `🤝 Access to a pool of skilled developers and designers
    📈 Transparent review system for quality assurance
    📅 Timely delivery and project updates
    💬 Dedicated support for project inquiries`
    ],
    imgUrl: {
      light: PROJECT_IMAGE.sudocodes,
      dark: PROJECT_IMAGE.sudocodes,
    },
    techStack: ["Javascript", "Html", "Bootstrap"],
    githubLink: "https://github.com/httpsumairsaad1/Sudocodes-js-project",
    liveLink: "https://sudocodes-by-umair-saad.netlify.app/",
  },
  {
    id: 1,
    name: "Tripy UI Design",
    icon: PROJECT_IMAGE.air_icon,
    description: [
      "Tripy, a comprehensive travel planning platform, allows users to organize their trips, book hotels, flights, and trains, and ensure seamless travel experiences. It provides an intuitive UI design and connects travelers with various services for a hassle-free journey.",
      `🌐 Integrated trip planning and booking system
      💼 Book hotels, flights, and trains effortlessly
      🗨️ User reviews and recommendations for travel services
      🔍 Complete UI design for easy navigation`,
      `✈️ One-stop platform for all travel needs
      🏨 Access to a wide range of hotels and accommodations
      📅 Real-time booking and itinerary updates`
    ],
    imgUrl: {
      light: PROJECT_IMAGE.air_light,
      dark: PROJECT_IMAGE.air_dark,
    },
    techStack: ["Figma", "Unsplash", "Bootstrap"],
    githubLink: "https://github.com/httpsumairsaad1/Tripy-Project",
    liveLink: "https://www.figma.com/design/q9ej8IvErQXP6TcBzewd2I/TripUI---Umair-Saad?node-id=0-1&t=jVPPsN1EjEcBFHjy-1",
  },
  {
    id: 1,
    name: "MicroEstate3D",
    icon: PROJECT_IMAGE.micro_icon,
    description: [
      "MicroEstate3d, a platform where users can buy houses, offers a 3D UI allowing them to explore rooms, apartments, colonies/areas, cities, and countries. It features a detailed map and web UI design for an immersive real estate experience",
      `🌐 Comprehensive house buying platform
      💼 Explore rooms, apartments, and areas in 3D
      🗨️ User reviews and feedback on properties
      🔍 Detailed map for easy navigation`,
      `🏠 3D visualization of rooms and properties
      🌍 Explore properties at various geographical levels
      📈 Transparent review system for property assurance
      💬 Dedicated support for property inquiries and assistance`,
    ],
    imgUrl: {
      light: PROJECT_IMAGE.micro,
      dark: PROJECT_IMAGE.micro_dark,
    },
    techStack: ["Figma", "Unsplash"],
    githubLink: "https://www.figma.com/design/hqJOFWDeNnF3Sll36dlsla/Cake-App-UI-%7C%7C-Bakery-UI-(Community)?node-id=11-276&t=QMxlL0eonDRWH8dM-1",
    liveLink: "https://www.figma.com/design/hqJOFWDeNnF3Sll36dlsla/Cake-App-UI-%7C%7C-Bakery-UI-(Community)?node-id=11-276&t=QMxlL0eonDRWH8dM-1",
  },
];


export { PROJECTS };
