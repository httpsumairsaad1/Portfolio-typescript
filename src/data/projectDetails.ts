import PROJECT_IMAGE from "../assets/projects/index";

const PROJECTS: IProjectInfo[] = [
  {
    id: 1,
    name: "Hamdard",
    icon: PROJECT_IMAGE.hamdard_icon_v,
    description: [
      "Hamdard Donatio, A website where companies can easily donate to Hamdard through the Hamdard website. This makes it simple for businesses to support the organization's community projects.",
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

    liveLink: "",
  },

  {
    id: 1,
    name: "DoubleAI",
    icon: PROJECT_IMAGE.graphical_icon,
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
    icon: PROJECT_IMAGE.whiteboard_icon,
    description: [
      "Whiteboard, a digital tool that emulates the functionality of a physical whiteboard. Users can draw, write, and take notes in a digital format.",
      `🖊️ Pen with color and size adjustment 
  🧽 Eraser with size adjustment 
  🌈 Background color change of the whiteboard
  🖍️ Shapes like line, rectangle, circle to draw on whiteboard`,
      `↩️ Undo, 🔁 Redo, 🗑️ Clear the whiteboard drawing
  🌗 Dark and 🌕 light mode to ensure a comfortable experience
  💾 Save, 📂 load, and 🗑️ delete from local storage`,
    ],
    imgUrl: {
      light: PROJECT_IMAGE.whiteboard_light,
      dark: PROJECT_IMAGE.whiteboard_dark,
    },
    techStack: ["Javascript", "Html", "Tailwind css"],
    githubLink: "https://github.com/vickyguptaa7/WhiteBoard",
    liveLink: "https://vickyguptaa7.github.io/Scribble-Verse/",
  },
];

const SMALL_PROJECTS = [
  {
    id: 1,
    name: "Clock App",
    icon: PROJECT_IMAGE.clock_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.clock_light,
      dark: PROJECT_IMAGE.clock_dark,
    },
    liveLink: "https://vickyguptaa7.github.io/Clock/",
    githubLink: "https://github.com/vickyguptaa7/Clock",
    techStack: ["Javascript", "Html", "TailwindCss"],
  },
  {
    id: 2,
    name: "Calculator App",
    icon: PROJECT_IMAGE.calculator_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.calculator,
      dark: PROJECT_IMAGE.calculator,
    },
    liveLink: "https://vickyguptaa7.github.io/Calculator/",
    githubLink: "https://github.com/vickyguptaa7/Calculator",
    techStack: ["Javascript", "Html", "Css"],
  },
  {
    id: 3,
    name: "Quote Generator",
    icon: PROJECT_IMAGE.quote_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.quote,
      dark: PROJECT_IMAGE.quote,
    },
    liveLink:
      "https://vickyguptaa7.github.io/Learning-Projects/1.Quote%20Generator/dist/index.html",
    githubLink:
      "https://github.com/vickyguptaa7/Learning-Projects/tree/master/1.Quote%20Generator",
    techStack: ["Javascript", "Html", "TailwindCss"],
  },
  {
    id: 4,
    name: "Music Player",
    icon: PROJECT_IMAGE.music_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.music,
      dark: PROJECT_IMAGE.music,
    },
    liveLink:
      "https://vickyguptaa7.github.io/Learning-Projects/6.Audio%20Player/dist/index.html",
    githubLink:
      "https://github.com/vickyguptaa7/Learning-Projects/tree/master/6.Audio%20Player",
    techStack: ["Javascript", "Html", "TailwindCss"],
  },
  {
    id: 5,
    name: "SlideShow",
    icon: PROJECT_IMAGE.slideshow_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.slideshow,
      dark: PROJECT_IMAGE.slideshow,
    },
    liveLink:
      "https://vickyguptaa7.github.io/Mini-Projects/15.Background%20Slider/dist/index.html",
    githubLink:
      "https://github.com/vickyguptaa7/Mini-Projects/tree/master/15.Background%20Slider",
    techStack: ["Javascript", "Html", "TailwindCss"],
  },
  {
    id: 6,
    name: "Joke Teller",
    icon: PROJECT_IMAGE.joke_icon,
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.joke,
      dark: PROJECT_IMAGE.joke,
    },
    liveLink:
      "https://vickyguptaa7.github.io/Learning-Projects/4.Joke%20Teller/dist/index.html",
    githubLink:
      "https://github.com/vickyguptaa7/Learning-Projects/tree/master/4.Joke%20Teller",
    techStack: ["Javascript", "Html", "TailwindCss"],
  },
  // {
  //   id: 7,
  //   name: "Skeleton Loader",
  //   icon: PROJECT_IMAGE.skeleton_icon,
  //   description: "",
  //   imgUrl: {
  //     light: PROJECT_IMAGE.skeleton,
  //     dark: PROJECT_IMAGE.skeleton,
  //   },
  //   liveLink:
  //     "https://vickyguptaa7.github.io/Mini-Projects/18.Skeleton%20Loader/dist/index.html",
  //   githubLink:
  //     "https://github.com/vickyguptaa7/Mini-Projects/tree/master/18.Skeleton%20Loader",
  //   techStack: ["Javascript", "Html", "TailwindCss"],
  // },
  // {
  //   id: 8,
  //   name: "Progress Steps",
  //   icon: PROJECT_IMAGE.progress_icon,
  //   description: "",
  //   imgUrl: {
  //     light: PROJECT_IMAGE.progress,
  //     dark: PROJECT_IMAGE.progress,
  //   },
  //   liveLink:
  //     "https://vickyguptaa7.github.io/Mini-Projects/2.Progress_Steps/dist/index.html",
  //   githubLink:
  //     "https://github.com/vickyguptaa7/Mini-Projects/tree/master/2.Progress_Steps",
  //   techStack: ["Javascript", "Html", "TailwindCss"],
  // },
];

export { PROJECTS, SMALL_PROJECTS };
