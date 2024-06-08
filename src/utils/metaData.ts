type pagesType = {
  titlePage: string;
  description: string;
  keywords: string;
};

interface metaType {
  home: pagesType;
  blog: pagesType;
}

export const metaData: metaType = {
  home: {
    titlePage: "daco.dev",
    description:
      "Hola soy Daniel Colmenares, desarrollador de software con 3+ años de experiencia usando tecnologias web",
    keywords:
      "fullStack developer, backend developer, frontend developer, dacodev, daco.dev, programador, software",
  },
  blog: {
    titlePage: "daco.dev",
    description:
      "En este blog podrás encontrar información relacionado a mundo de TI",
    keywords:
      "linux, blog, posts, programación, fullstack, backend, frontend, development",
  },
};
