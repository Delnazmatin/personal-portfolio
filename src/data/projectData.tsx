type ProjectDataType = {
  name: string;
  imageSource: string;
  imageAlt: string;
  explanation: string;
  tech: string;
  gitHubLink: string;
};
export const ProjectData: ProjectDataType[] = [
  {
    name: "Admin Panel",
    imageSource: "/picture/adminPanel-screenshot.png",
    imageAlt: "admin panel project",
    explanation:
      "Admin Dashboard is a responsive React-based administration panel featuring authentication, category management, and price management. This project was developed during my learning journey and helped me gain practical experience with React Router, component-based architecture, and responsive web design.",
    tech: "React,JavaScript,CSS",
    gitHubLink: "https://github.com/Delnazmatin/admin-panel",
  },
  {
    name: "Currency converter",
    imageSource: "/picture/currencyConverter-screenshot.png",
    imageAlt: "currency converter project",
    explanation:
      "A simple currency converter built with React, TypeScript, and Tailwind CSS. Users can enter a custom exchange rate and instantly convert between USD and IRR through a responsive and user-friendly interface.",
    tech: "React,TypeScript,REST API, Tailwind css",
    gitHubLink: "https://github.com/Delnazmatin/currency-converter",
  },
  {
    name: "Menulo",
    imageSource: "/picture/menulo-screenshot.png",
    imageAlt: "menulo",
    explanation:
      "MenuLo is a responsive restaurant menu application built with React and Context API. Users can browse items by category, search menu items, manage quantities, and view an order summary with the total price. This project helped me strengthen my understanding of state management, dynamic filtering, and responsive user interface development.",
    tech: "React Context API CSS",
    gitHubLink: "https://github.com/Delnazmatin/Menulo",
  },
  {
    name: "Weather app",
    imageSource: "/picture/weather-screenshot.png",
    imageAlt: "weather app project",
    explanation:
      "Weather App is a responsive weather application built with React, TypeScript, Tailwind CSS, and a weather API. Users can search for any city and instantly access real-time weather data. This project helped me gain hands-on experience with API integration, asynchronous data fetching, TypeScript, and responsive interface design.",
    tech: "React,TypeScript,Rest API",
    gitHubLink: "https://github.com/Delnazmatin/weather-app",
  },
  {
    name: "Paw Gallery",
    imageSource: "/picture/powGallery-screenshot.png",
    imageAlt: "paw gallery project",
    explanation:
      "PawGallery is a responsive dog gallery application built with React and TypeScript. It fetches dog data from an external API and allows users to search, browse, and navigate through paginated results. This project helped me strengthen my skills in API integration, pagination, responsive layouts, and TypeScript development.",
    tech: "React,TypeScript,API Integration",
    gitHubLink: "https://github.com/Delnazmatin/PawGallery",
  },
];
