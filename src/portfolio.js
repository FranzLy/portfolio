/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Xiaowen Sun",
  title: "About me",
  subTitle: emoji(
    "Hi all, I'm Xiaowen, A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / React.js / Node.js /SpringBoot and some other cool libraries and frameworks."
  ),

  
  resumeLink:
    "https://drive.google.com/file/d/1U_rxXVwjd4MCLJ2DgR1rciARfCEmi1aw/view?usp=sharing", // Set to empty to hide the button
  
    transcriptLink:
    "https://drive.google.com/file/d/1qT8zZIeVsrdOk0sAs-rTXMBL29Od9LNE/view?usp=sharing", 
    displayGreeting: true // Set false to hide this section, defaults to true

};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shawnsuun",
  linkedin: "https://www.linkedin.com/in/xiaowensun0906/",
  gmail: "sun.xiaowe@northeastern.edu",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)"
    ),
    emoji(
      "⚡ Backend development with Java and Spring Boot, including building RESTful APIs and data management with SQL and NoSQL databases"
    ),
    emoji(
      "⚡ Frontend development with advanced HTML, CSS, and JavaScript, plus frameworks like React.js and Bootstrap"
    ),
    emoji(
      "⚡ Building scalable, distributed systems and infrastructure"
    ),
    emoji("⚡ Skilled in developing efficient, concurrent applications using advanced multi-threading techniques")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fa fa-leaf"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      "skillName": "Docker",
      "fontAwesomeClassname": "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternuniversity_logoseal.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - May 2025",
      desc: "GPA 4.0, Took courses about Intensive Foundations of CS, Discrete Structures, Object-Oriented Design, Data Str, Algo & App in CmpSys, Database Management Sys, Web Development, Computer Systems, Natural Language Processing...",
      descBullets: [
      ]
    },
    {
      schoolName: "Chang'an University",
      logo: require("./assets/images/Changan_University_logo.png"),
      subHeader: "Master of Engineering in Road and Railway Engineering",
      duration: "September 2014 - June 2017",
      desc: "Ranked top 10% in the program.",
      descBullets: []
    },
    {
      schoolName: "Northeast Forestry University",
      logo: require("./assets/images/Northeast_Forestry_University_logo.png"),
      subHeader: "Bachelor of Engineering in Civil Engineering",
      duration: "September 2010 - June 2014",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Systems and Infrastructure",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Management",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systems and Infrastructure Engineer Intern ",
      company: "LinkedIn",
      companylogo: require("./assets/images/linkedin-icon-2048x2048-ya5g47j2.png"),
      date: "June 2024 – Sep 2024",
      desc: "",
      descBullets: [
        "Supported LinkedIn’s scalable distributed systems by facilitating the transition to Apache Flink as the new batch compute stack, leading to a 25% improvement in system performance",
        "Independently designed and implemented a new storage backend for the Flink History Server , restructed the archive storage from file-based to RocksDB kvStore with multithreaded and pluggable architecture.",
        "Boosted History Server performance by reducing inode usage by 99.99% and memory load by 95.6%, increasing storage capacity by 249,482x, and accelerating data retrieval by 4.25x; Contributed to the Apache open source community.",
        "Onboarded Flink-Batch to multiple clusters with Hadoop and Hive using DevOps practices, achieving <1% downtime, improved system scalability by 3x, reduced load imbalance by 80%, and enabling high system performance and reliability."
      ]
    },
    {
      role: "Tech(SDE) Intern",
      company: "United Software Corporation",
      companylogo: require("./assets/images/United-Software-Corporation-LinkedIn-Logo-.png"),
      date: "May 2023 – Aug 2023",
      desc: "",
      descBullets: [
        "Developed a scalable full-stack education platform with MERN stack, supporting over 1,000+ users in agile practices.",
        "Built a Node.js backend with 40+ RESTful APIs, enabling core features for user interaction and data management, leading to a 43.2% improvement in user engagement.",
        "Implemented MongoDB, enhancing query performance by 31% through optimized data storage and query design.",
        "Set up and maintained CI/CD pipelines using GitLab and Docker, automating deployment to AWS.",
        "Implemented automated testing with 92% code coverage, automating regression tests with Robot Framework, reducing test cycle time by 50%."
      ]
    },
    {
      role: "Engineer",
      company: "CCCC-FHDI Engineering Co., Ltd. ",
      companylogo: require("./assets/images/1631334118437.jpeg"),
      date: "Jan 2022 – Jul 2022",
      desc: "",
      descBullets: [
        "Designed and implemented a data pipeline using Kafka and Spark for stream and batch processing of traffic data, boosting processing efficiency by 30%.",
        "Contributed data-driven optimization solutions using traffic big data, reducing traffic congestion by 25% and generating $2.5M in economic benefits in key areas.",
        "Stored and analyzed historical traffic data with Hadoop and MySQL, providing insights that led to a 20% improvement in traffic light scheduling and overall flow.",
        "Automated workflows with Airflow, ensuring seamless, hands-off operation and 95% system reliability."
      ]    
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME SELECTED PROJECTS THAT I DEVELOPED",
  projects: [
    {
      image: require("./assets/images/cineSocialHub.png"),
      projectName: "CineSocialHub",
      projectDesc: "A MERN stack Twitter-style social media platform designed for movie enthusiasts to connect, share, and engage in discussions about films and cinema culture.",
     
     
     
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cinesocialhub.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/takeout.png"),
      projectName: "Takeout management system",
      projectDesc: "A comprehensive enterprise-level food takeout management system with SpringBoot, Mybatis, Redis, Docker and Mysql tech stack",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/Shawnsuun/Takeout-food-management?tab=readme-ov-file"
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
      title: "Cognizant Full Stack Developer Train to Hire Bootcamp",
      subtitle:
        "A train-for-hire bootcamp in Web Development, intermediate modules on JavaScript and Java, and advanced topics in Spring Boot and data persistence, culminating in practical projects like building web applications.",
      image: require("./assets/images/conizant.png"),
      imageAlt: "Cognizant Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://graduation.udacity.com/confirm/e/4908d88a-4f21-11ed-8376-6b9b77936274"
        },
      ]
    },
    {
      title: "AWS Machine Learning Foundations 2022",
      subtitle:
        "A program offers a comprehensive understanding of machine learning, covering model building, advanced topics like computer vision, hands-on experience with AWS AI devices, and the use of Amazon SageMaker for model deployment, along with object-oriented programming best practices.",
      image: require("./assets/images/aws.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://graduation.udacity.com/api/graduation/certificate/DSKNYHPD/download"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "More",
  subtitle:
    "Something more about me",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Who am I?",
      description:
        "I am a CS student with a background in engineering. Throughout my academic journey and professional experiences, I have developed a strong passion for problem-solving, analytical thinking, and utilizing technology to create innovative solutions. I have always been fascinated by the power of technology and its ability to revolutionize various industries and improve people's lives."
    },
    {
      url: "",
      title: "What is my background?",
      description:
        "My background lies in civil engineering, where I gained a solid foundation in mathematics, physics, and structural analysis. I have worked on numerous projects, ranging from designing infrastructure systems to managing construction processes. These experiences have honed my critical thinking skills, attention to detail, and ability to work collaboratively in multidisciplinary teams."
    },
    {
      url: "",
      title: "Why did I decide to pursue a technical degree?",
      description:
        "In my engineering career, I witnessed technology's transformative impact, particularly through BIM and advanced data analysis, enhancing industry efficiency and sustainability. This inspired me to pursue a technical degree, aligning with my aspiration for continuous learning and desire to innovate using technology. "
    },
    {
      url: "",
      title: "What are my goals?",
      description:
        "My primary goal is to bridge the gap between my background in engineering and the field of technology. I aspire to combine my knowledge of engineering with cutting-edge technologies such as AI, sys and infra, and web applications to develop smart and sustainable solutions for the built environment. "
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
