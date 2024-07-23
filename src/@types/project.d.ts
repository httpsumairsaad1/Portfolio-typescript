interface IProjectInfo {
  id: number;
  name: string;
  icon: string;
  description: string[];
  imgUrl: {
    light: string;
    dark: string;
  };
  techStack: string[];
  liveLink: string;
  githubLink: string;
}
