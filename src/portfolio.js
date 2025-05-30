/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Franz Lee",
  title: "Hi all, I'm Franz",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having 4+ years of experience of building reliable, high-performance and scalable systems. \
    Proficient in Java, Golang, C++ and React, with strong hands-on skills in Spring Boot, Spring Cloud, Redis, Kafka and related technologies. \
    Experienced in designing RESTful APIs, microservices architecture, and distributed systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gxM0JTq0iKg6mhJMRAAfBFlQMrGBg0a5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FranzLy",
  linkedin: "https://www.linkedin.com/in/franz-lee/",
  gmail: "@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWAR ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Skilled in backend development with Java, Golang, and C++, building high-performance and maintainable distributed systems with Kafka, Redis, PostgreSQL, and MongoDB.",
    "⚡ Proficient in microservice architecture using Spring Boot, Spring Cloud, and Gin, with containerization and orchestration through Docker and Kubernetes for scalable backend deployment.",
    "⚡ Experienced in building secure and reliable cloud-native systems on AWS (EC2, S3, RDS, Lambda, CloudWatch), and in developing cybersecurity solutions including EDR, sandboxing, and secure communication protocols.",
    "⚡ Passionate about integrating AI into backend systems, with hands-on experience in LLM orchestration, LangChain-powered pipelines, vector database search (Pinecone, Weaviate), and intelligent API gateway design."
  ],
  
  softwareSkills: [
    { skillName: "Java", iconKey: "FaJava", color: "#f89820" },
    { skillName: "Golang", iconKey: "DiGo", color: "#00ADD8" },
    { skillName: "C++", iconKey: "SiCplusplus", color: "#00599C" },
    { skillName: "Python", iconKey: "FaPython", color: "#3776AB" },
    { skillName: "Spring Boot", iconKey: "SiSpringboot", color: "#6DB33F" },
    { skillName: "Spring Cloud", iconKey: "SiSpring", color: "#6DB33F" },
    { skillName: "React", iconKey: "FaReact", color: "#61DAFB" },
    { skillName: "MySQL", iconKey: "SiMysql", color: "#4479A1" },
    { skillName: "PostgreSQL", iconKey: "SiPostgresql", color: "#336791" },
    { skillName: "MongoDB", iconKey: "SiMongodb", color: "#47A248" },
    // { skillName: "DynamoDB", iconKey: "SiDynamodb", color: "#4053D6" },
    { skillName: "Kafka", iconKey: "SiApachekafka", color: "#231F20" },
    { skillName: "RabbitMQ", iconKey: "SiRabbitmq", color: "#FF6600" },
    { skillName: "Redis", iconKey: "SiRedis", color: "#DC382D" },
    { skillName: "Elasticsearch", iconKey: "SiElasticsearch", color: "#005571" },
    { skillName: "Logstash", iconKey: "SiLogstash", color: "#000000" },
    { skillName: "Kibana", iconKey: "SiKibana", color: "#E8478B" },
    { skillName: "Jenkins", iconKey: "SiJenkins", color: "#D24939" },
    { skillName: "Docker", iconKey: "FaDocker", color: "#0db7ed" },
    { skillName: "Kubernetes", iconKey: "SiKubernetes", color: "#326ce5" },
    { skillName: "AWS", iconKey: "FaAws", color: "#FF9900" },
    { skillName: "Nginx", iconKey: "SiNginx", color: "#009639" },
    { skillName: "Prometheus", iconKey: "SiPrometheus", color: "#E6522C" },
    { skillName: "Grafana", iconKey: "SiGrafana", color: "#F46800" },
    // { skillName: "OpenAI", iconKey: "SiOpenai", color: "#412991" },
    { skillName: "LangChain", iconKey: "SiLangchain", color: "#000000" },
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Southeast University",
      logo: require("./assets/images/SEU.png"),
      subHeader: "Control Science and Engineering",
      duration: "September 2018 - June 2021",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Nanjing University of Aeronautics and Astronautics",
      logo: require("./assets/images/NUAA.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Distributed & Microservice Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud-Native & DevOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "AI-Augmented Backend Systems",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer(Full Time)",
      company: "Sangfor Technologies",
      companylogo: require("./assets/images/SangforLogo.png"),
      date: "June 2021 – June 2024",
      desc: "Participated in the development of two core security products—an endpoint detection and response (EDR) system and a sandbox platform.",
      descBullets: [
        "Built a microservices-based vulnerability detection engine with asynchronous communication via Kafka, reducing system latency and enabling fast vulnerability scanning and automated patch delivery across 10,000+ endpoints.",
        "Implemented a distributed logging system with read-write separation, achieving 55% improvement in query performance through PostgreSQL partitioning and composite indexing.",
        "Integrated Elasticsearch for full-text search on vulnerabilities and alert logs, enhancing log traceability and analysis efficiency.",
        "Mentored interns and collaborated on CI/CD pipelines using Docker and Jenkins, accelerating release cycles.",
        "Designed dual-storage architecture for sandbox policy management, reducing query and delivery latency by 40%.",
        "Built a messaging architecture using RabbitMQ to support low-latency, reliable communication between management platform and endpoint agents.",
        "Developed comprehensive testing framework with JUnit and Mockito, achieving 90% test coverage."
      ]
    }
  ],
    display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME SELECTED PROJECTS THAT I DEVELOPED",
  projects: [
    {
      image: require("./assets/images/Aron Agent.png"),
      projectName: "Aron Agent",
      projectDesc: "A simple yet flexible framework for building AI Agents, Chat Bots, and LLM microservices on the JVM.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/FranzLy/Anita-Chat-Bots"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/RoncooLogo.png"),
      projectName: "A Payment System",
      projectDesc: "a full-featured e-commerce platform built with Spring Boot, Spring Cloud, MySQL, Elasticsearch, Redis, RabbitMQ, and Vue.js, supporting product browsing, order placement, user authentication, and distributed microservice architecture.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/FranzLy/longguo-pay"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/HMall.png"),
      projectName: "H-Mall E-commerce Platform",
      projectDesc: "a full-featured e-commerce platform built with Spring Boot, Spring Cloud, MySQL, Elasticsearch, Redis, RabbitMQ, and Vue.js, supporting product browsing, order placement, user authentication, and distributed microservice architecture.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/TheSkyTakeout.png"),
      projectName: "Sky Takeout Management System",
      projectDesc: "A comprehensive enterprise-level food takeout management system with SpringBoot, Mybatis, Redis, Docker and Mysql tech stack",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/FranzLy/Sky-take-out/tree/master"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-240-660-0744",
  email_address: "franzlee1995@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
