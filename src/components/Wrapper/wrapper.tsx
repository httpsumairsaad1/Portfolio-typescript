import { twMerge } from "tailwind-merge";

interface IPROPS {
  children: React.ReactNode;
  className?: string;
}
function Wrapper({ children, className }: IPROPS) {
  return (
    <div
      className={twMerge(
        "w-full px-8 mx-auto sm:px-12 lg:px-16 xl:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Wrapper;
