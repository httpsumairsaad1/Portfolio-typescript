interface IStackInfo {
  id: number;
  name: string;
  icon: string;
  className: string;
}

interface ITechStackInfo {
  id: number;
  name: string;
  list: IStackInfo[];
}
