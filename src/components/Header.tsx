import { FC, ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
};

interface HeaderProps {
  image: Image;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <div>
      {children}
      <img {...image} />
    </div>
  );
};

export default Header;
