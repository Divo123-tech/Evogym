// import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const LowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink 
      className={`${selectedPage == LowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`} 
      href={`#${LowerCasePage}`} 
      onClick={() => setSelectedPage(LowerCasePage)}>
      {page}
    </AnchorLink>
  );
};

export default Link;
