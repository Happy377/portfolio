import {
    mobile,
    backend,
    web,
    docker,
    figma,
    git,
    mongodb,
    reactjs,
    sql,
    django,
    vue,
    azure,
    kotlin,
    tailwind,
    champfleuri,
    qinaps,
    michaels,
    st,
    boucan,
    avalanche,
    portfolio,
    product,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Vue",
      icon: vue,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "Qinaps",
      icon: qinaps,
      iconBg: "#E6DEDD",
      date: "November 2021 - February 2022",
      points: [
        "Engineered key components of a File Management Platform using Django, enhancing file organization and ease of use.",
        "Responsible for working on the Backend to support a more appealing way to edit and organize documents, through having them in a node form.",
      ],
    },
    {
      title: "Warehouseman",
      company_name: "Michaels",
      icon: michaels,
      iconBg: "#E6DEDD",
      date: "September 2023 - December 2023",
      points: [
        "Worked to establish the inventory management system, contributing to a successful opening of the first franchise in the region.",
        "Facilitated communication between anglophone store planners and francophone staff, and interacted with clients in both French and English.",
      ],
    },
    {
      title: "Convoyeur",
      company_name: "STMicroelectronics",
      icon: st,
      iconBg: "#E6DEDD",
      date: "March 2022 - June 2022",
      points: [
        "Independently supplied and distributed silicone sheets to workshops in the factory's clean room, assisting in the production of microchips",
      ],
    },
    {
      title: "Animateur",
      company_name: "Champfleuri",
      icon: champfleuri,
      iconBg: "#E6DEDD",
      date: "Summers of 2018 to 2023",
      points: [
        "Planned, led, and supervised French campers in various workshops, games, and activities to improve their oral English skills",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Boucan !In development!",
      description:
        "Web Application that allows users to search information on French speaking communities accross the World through interactive Maps; following the guidelines of the 2013 Ontario Core French Curriculum",
      tags: [
        {
          name: "vue",
          color: "green-text-gradient",
        },
        {
          name: "nuxt",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mapbox",
          color: "orange-text-gradient",
        },
      ],
      image: boucan,
      source_code_link: "https://github.com/Happy377/Boucan",
    },
    {
      name: "Personal Portfolio",
      description:
        "Web application where users can get to know me as a recent computer science graduate",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Happy377/portfolio",
    },
    {
      name: "Avalanche",
      description:
        "Mobile skiing platform enabling the users to manage their skying passes accross multiple resorts and allowing them scanned via NFC. Done in an Academic context.",
      tags: [
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "C sharp",
          color: "pink-text-gradient",
        },
      ],
      image: avalanche,
      source_code_link: "https://github.com/stupside/avalanche-android",
    },
    {
      name: "Product ordering service",
      description:
        "REST API where users can place an order comprised of multiple items through an API. Done in an Academic Context",
      tags: [
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: product,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };