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
  username: "Younes43",
  title: "Hi all, I'm Younes",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience Full Stack Developpement, Data Science and Machine learning  with Python / JavaScript / C++ / Java / Reactjs / Nodejs / Tensorflow / Pytorch and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CDJi0oJVEYroiSlnXznSltXUTEmYdTEE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Younes43",
  linkedin: "https://www.linkedin.com/in/younes-elbouzekraoui/",
  gmail: "elbouzekraoui.younes@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VERSATILE FULL STACK DEVELOPER WITH A FOCUS ON DATA-DRIVEN APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop and maintain full stack web applications, utilizing modern frameworks and robust backend technologies to enhance user experience and functionality."
    ),
    emoji("⚡   Develop machine learning models and data-driven solutions to solve complex problems in various domains such as Forecasting, Classification, Object detection, utilizing libraries like TensorFlow, PyTorch, and Scikit-Learn."),
    emoji(
      "⚡  Implement and manage databases with expertise in PostgreSQL and MySQL, ensuring efficient data storage, retrieval, and integrity."
    ),
    emoji(
      "⚡ Build and integrate data processing pipelines using advanced tools like Spark, Hadoop, and cloud services from AWS and Azure to handle large-scale data operations effectively."
    ),
    emoji(
      "⚡  Ensure high application performance and security through best practices in continuous integration, containerization with Docker, and orchestration with Kubernetes."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "Python" },
  { skillName: "JavaScript" },
  { skillName: "C++" },
  { skillName: "SQL" },
  { skillName: "Docker" },
  { skillName: "React" },
  { skillName: "Node.js" },
  { skillName: "AWS" },
  { skillName: "HTML5" },
  { skillName: "CSS3" },
  { skillName: "TypeScript" },
  { skillName: "Java" },
  { skillName: "R" },
  { skillName: "Express.js" },
  // { skillName: "Bootstrap" },
  { skillName: "FastAPI" },
  { skillName: "Celery" },
  { skillName: "Postman" },
  { skillName: "TensorFlow" },
  { skillName: "PyTorch" },
  { skillName: "scikit-learn" },
  { skillName: "Spark" },
  { skillName: "Hadoop" },
  { skillName: "OpenCV" },
  { skillName: "PostgreSQL" },
  { skillName: "MongoDB" },
  { skillName: "Git" },
  // { skillName: "NoSQL" },
  { skillName: "Azure" },
  { skillName: "Kubernetes" },
],
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gatech.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - December 2023",
      desc: "Specialization In Machine Learning, Masters Thesis Topic: Real-time detection of traffic signs on mobile devices using deep learning",
      descBullets: [
        "Graduate Algorithms",
        "Machine Learning",
        "Natural Language Processing",
        "Autonomous Robotics"
      ]
    },
    {
      schoolName: "ENSEIHT Engineering",
      logo: require("./assets/images/n7.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - April 2017",
      desc: "Ranked top 10% in the program.",
      descBullets: [
        "Algorithms and Data Structures",
        "Cloud and Distributed computing",
        "Big Data High-Performance Computing",  
        "Statistics and Probability" 
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science and Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Developpement",
      progressPercentage: "80%"
    },
    {
      Stack: "Front End ",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Georgia Tech Research Institute",
      companylogo: require("./assets/images/gtri.jpeg"),
      date: "Jan 2023 – Dec 2023",
      descBullets: [ "Contributed to a Georgia Department of Transportation project for automated curve signs inventorying, helping in improved road safety in the state of Georgia.",
        "Achieved a 65% reduction in traffic sign inventory time for transportation agencies by developing a Deep Learning object detection application using Python and JavaScript, containerized with Docker and deployed on AWS EC2.",
        "Increased traffic sign detection accuracy from 92% to 97% by implementing a human feedback loop to refine image data quality for retraining the machine learning model.",
        "Supervised 5 student groups in deep learning and computer vision projects on vehicle and sidewalk detection" 
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Airbus Defence and Space",
      companylogo: require("./assets/images/ads.png"),
      date: "May 2022 – November 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Created a Web application allowing the prediction of satellite costs for expense forecasting with 85% accuracy using Python’s Dash and Sklearn libraries, and JavaScript, used by 20+ cost engineers.",
        "Designed interactive dashboards and KPIs for satellite cost market analysis, utilized by 50+ division members, resulting in a 25% reduction in decision-making time and easier identification of cost-saving trends.",
        "Improved consistency in satellite equipment costs data, leading to a 70% reduction in data retrieval time.",
        "Collaborated with cross-functional teams to provide data-driven insights and recommendations."
    ]
    
    },
    {
      role: "Software Engineer Intern",
      company: "Airbus",
      companylogo: require("./assets/images/airbus.png"),
      date: "June 2021 – October 2021",
      descBullets: [
        "Designed and implemented data processing pipelines for monitoring an aircraft anomaly using Spark and PostgreSQL, integrating 10+ data sources and processing over 2TB of flight radar data daily.",
        "Reduced data processing time by 40% using Spark on a cluster of nodes for processing large-scale datasets of 5TB.",
        "Prepared dashboards with JavaScript, HTML, and CSS to visualize flight management system data, for anomaly detection and forecasting, and decision-making support, used by 200+ personnel across 2 departments."
    ]
        }
    
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 770 742 8333",
  email_address: "elbouzekraoui.younes@gmail.com@gmail.com"
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
  isHireable,
  resumeSection
};
