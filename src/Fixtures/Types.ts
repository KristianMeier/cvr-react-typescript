export type Icon = {
  id: number;
  text: string;
  faIcon: string;
};

export type TextIcon = {
  id: number;
  text: string;
  faIcon: string;
  link: string;
};

export type TitleType = {
  mainTitle: string;
  earthIcon: Icon[];
  textIcons: TextIcon[];
  titleLinks: TextIcon[];
};

export type DataType = {
  navbar: {
    textIcons: TextIcon[];
  };
  title: TitleType;
  search: {
    title: string;
    textIcons: TextIcon[];
  };
  footer: {
    firstColumn: TextIcon[];
    secondColumn: TextIcon[];
    thirdColumn: TextIcon[];
  };
};

export type AccorditionDataType = {
  id: number;
  title: string;
  info: string;
};
