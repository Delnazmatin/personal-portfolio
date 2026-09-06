// type ProjectDataType = {
//   name: string;
//   imageSource: string;
//   imageAlt: string;
//   explanation: string;
//   tech: string;
//   gitHubLink: string;
// };
// export const ProjectData: ProjectDataType[] = [
//   {
//     name: "Admin Panel",
//     imageSource: "/picture/adminPanel-screenshot.png",
//     imageAlt: "admin panel project",
//     explanation:
//       "Admin Dashboard is a responsive React-based administration panel featuring authentication, category management, and price management. This project was developed during my learning journey and helped me gain practical experience with React Router, component-based architecture, and responsive web design.",
//     tech: "React,JavaScript,CSS",
//     gitHubLink: "https://github.com/Delnazmatin/admin-panel",
//   },
//   {
//     name: "Currency converter",
//     imageSource: "/picture/currencyConverter-screenshot.png",
//     imageAlt: "currency converter project",
//     explanation:
//       "A simple currency converter built with React, TypeScript, and Tailwind CSS. Users can enter a custom exchange rate and instantly convert between USD and IRR through a responsive and user-friendly interface.",
//     tech: "React,TypeScript,REST API, Tailwind css",
//     gitHubLink: "https://github.com/Delnazmatin/currency-converter",
//   },
//   {
//     name: "Menulo",
//     imageSource: "/picture/menulo-screenshot.png",
//     imageAlt: "menulo",
//     explanation:
//       "MenuLo is a responsive restaurant menu application built with React and Context API. Users can browse items by category, search menu items, manage quantities, and view an order summary with the total price. This project helped me strengthen my understanding of state management, dynamic filtering, and responsive user interface development.",
//     tech: "React Context API CSS",
//     gitHubLink: "https://github.com/Delnazmatin/Menulo",
//   },
//   {
//     name: "Weather app",
//     imageSource: "/picture/weather-screenshot.png",
//     imageAlt: "weather app project",
//     explanation:
//       "Weather App is a responsive weather application built with React, TypeScript, Tailwind CSS, and a weather API. Users can search for any city and instantly access real-time weather data. This project helped me gain hands-on experience with API integration, asynchronous data fetching, TypeScript, and responsive interface design.",
//     tech: "React,TypeScript,Rest API",
//     gitHubLink: "https://github.com/Delnazmatin/weather-app",
//   },
//   {
//     name: "Paw Gallery",
//     imageSource: "/picture/powGallery-screenshot.png",
//     imageAlt: "paw gallery project",
//     explanation:
//       "PawGallery is a responsive dog gallery application built with React and TypeScript. It fetches dog data from an external API and allows users to search, browse, and navigate through paginated results. This project helped me strengthen my skills in API integration, pagination, responsive layouts, and TypeScript development.",
//     tech: "React,TypeScript,API Integration",
//     gitHubLink: "https://github.com/Delnazmatin/PawGallery",
//   },
// ];
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
    name: "Langora",
    imageSource: "/picture/langora-screenshot.png",
    imageAlt: "langora project",
    explanation:
      "A language-learning application with authenticated sign-up/login, target-language and proficiency-level selection, and a vocabulary dashboard. Form validation is handled with React Hook Form and Zod for robust client-side error handling. The app is covered by unit and component tests (Vitest + RTL) across authentication flows, form validation, and key UI components, and is built with reusable components for scalable growth.",
    tech: "Next.js, React, TypeScript, React Hook Form, Zod, Vitest, React Testing Library",
    gitHubLink: "https://github.com/Delnazmatin/Langora",
  },
  {
    name: "Weather app",
    imageSource: "/picture/weather-screenshot.png",
    imageAlt: "weather app project",
    explanation:
      "A real-time weather app powered by the Open-Meteo API. Implements automatic geocoding (city name → coordinates) before fetching live weather data, with a modular architecture that separates API logic from UI, environment-based configuration, and error handling for invalid city searches. Fully responsive with dynamic weather icons and detailed conditions.",
    tech: "React, TypeScript, Vite, REST API",
    gitHubLink: "https://github.com/Delnazmatin/weather-app",
  },
  {
    name: "Paw Gallery",
    imageSource: "/picture/powGallery-screenshot.png",
    imageAlt: "paw gallery project",
    explanation:
      "A dog breed explorer powered by TheDogAPI. Features search and filtering, dynamic data rendering, and a component-based architecture with a fully adaptive CSS Grid layout across all screen sizes.",
    tech: "React, TypeScript, REST API, Pagination, CSS Grid",
    gitHubLink: "https://github.com/Delnazmatin/PawGallery",
  },
  {
    name: "Menulo",
    imageSource: "/picture/menulo-screenshot.png",
    imageAlt: "menulo",
    explanation:
      "A restaurant menu ordering app using the Context API for global state management. Supports category browsing, live search, quantity controls, and a running order summary with total price calculation, built with reusable, component-driven architecture and a fully responsive layout.",
    tech: "React, Context API, CSS",
    gitHubLink: "https://github.com/Delnazmatin/Menulo",
  },
  {
    name: "Currency converter",
    imageSource: "/picture/currencyConverter-screenshot.png",
    imageAlt: "currency converter project",
    explanation:
      "A lightweight currency converter that lets users define a custom exchange rate and convert instantly between USD and IRR, with a clean, responsive UI.",
    tech: "React, TypeScript, Tailwind CSS",
    gitHubLink: "https://github.com/Delnazmatin/currency-converter",
  },
];
