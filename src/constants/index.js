// projects 
import concert from "../assets/projects/concc.jpg";
import netflix from "../assets/projects/netflix.jpg";
import furhome from "../assets/projects/furhome.png";
import covid  from "../assets/projects/covid.jpeg";
import amazon from  "../assets/projects/amazon.jpeg";
import dashboard from "../assets/projects/dash.jpg"

//images 
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.JPG";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";



export const HERO_CONTENT = `Hi! I'm Glenda — a second year Business Analytics student at the National University of Singapore with a second major in Statistics, and a specialisation in Machine Learning.
Driven by curiosity and a passion for data, I enjoy leveraging technology to uncover insights and develop meaningful, impactful solutions. `;


export const ABOUT_TEXT = `My journey in tech has been shaped by curiosity and a desire to explore how technology can solve real-world problems. During my time as an undergraduate at the School of Computing under the National University of Singapore, i've built a strong foundation in data analysis, statistical modeling, and programming. \n Along the way, I’ve been actively exploring the various areas in tech to better understand where my passions lie — from data and business analytics, to product management, and even front-end development 👩🏼‍💻

\n An inquisitive learner at heart, i'm constantly seeking to learn new tools and technologies in my free time and applying them through personal projects. Feel free to explore some of my work in the Projects section of this portfolio! 😆`;


export const SLIDESHOW_IMAGES = [
  {src: image1},
  {src: image2},
  {src: image3},
  {src: image4},
  {src: image6},
  {src: image7},

];

export const HOBBIES_TEXT = "During my free time, I enjoy top rope climbing and bouldering, jamming on my guitars, as well as collecting vinyl records. I also love to travel and explore new places whenever I can. Outside of the climbing gym, you’ll probably find me indulging in mala tang or an acai bowl 🙊 "


export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Product Management Intern",
    company: "Horizon Labs",
    description: `As a Product Management Intern, I supported the development of Hethēna, a next-generation medical system designed to streamline healthcare workflows and enhance patient experience. Working in a startup environment with Agile and Scrum methodologies, I conducted market and user research, defined product requirements, prioritized features, and collaborated closely with design and engineering teams to deliver an intuitive, scalable solution.`,
    technologies: ["Product Lifecycle", "Market/User Research", "Prototyping", "Collaboration", "Agile Development"],
  },
  {
    year: "Jan 2025 - Apr 2025",
    role: "Undergraduate Teaching Assistant - IS2218 Digital Platforms for Businesses",
    company: "NUS School of Computing",
    description: `Supported the instruction of the course IS2218 by grading and providing feedback on assignments. Helped students grasp concepts by holding weekly consultation sessions to clarify doubts.`,
    technologies: ["Grading", "Teaching", "Leadership", "Team Coordination"],
  },
  {
    year: "Jul 2024 - Present",
    role: "Front Desk Staff",
    company: "BFF Climb",
    description: `Served as the first point of contact for customers — handling check-ins, equipment rentals, memberships, and inquiries. Assisted with day-to-day operations, and addressed customer concerns promptly. `,
    technologies: ["Customer Service", "Communication", "Conflict Resolution"],
  },
];

export const PROJECTS = [
  {
    title: "CLIMBRR - Climbing Social App 🧗🏻‍♀️ (In Progress)" ,
    image: concert, 
    description:
      "Clmbrr is a social networking app for climbers, offering a central hub to connect with friends, share routes from various gyms, exchange beta, log progress, and build connections. ",
    technologies: ["React", "Appwrite", "Tailwind CSS", "React Query"],
  },

  {
    title: "TixTacts - Ticketing Bot 🎟️ " ,
    image: concert, 
    description:
      "Developed a functional ticketing assistant that bypasses Ticketmaster and Livenation queues to secure concert tickets, complete with automated form filling and 2FA verification. Successfully used during live sales to outpace competitors, cart tickets and distribute sharable bypass links via a Telegram bot.",
    technologies: ["Python", "Pyppeteer ", "Telegram Bot API", "Web Scraping", "Automation"],
  },

  {
    title: "Furrever Home" ,
    image: furhome, 
    url: " https://furreverhome-dc0e2.web.app",
    description:
      "Inspired by dating apps, Furrever Home is a web app that connects pet owners and seekers for faster, more accessible pet adoptions. It features user matching, real-time chat, and personalised recommendations to reduce pet abandonment and streamline pet rehoming. ",
    technologies: ["HTML", "CSS" , "JavaScript", "Vue.js", "Firebase Authentication", "Firebase Firestore", "Figma", "GitHub"],
  },
  
  {
    title: "Netflix Data Analysis (PostgreSQL)",
    image: netflix,
    url: "https://github.com/glenqa/Data-Portfolio/tree/main/netflix_data_analysis_sql",
    description:
      "This project explores a Netflix movie and TV Show dataset using SQL-based data analysis. Using PostgreSQL, I performed data cleaning and querying to answer common business problems by extracting meaningful insights about content distribution, ratings, genres and trends over time.",
    technologies: ["PostgreSQL", "Data Extraction", "Data Manipulation", "Data Cleaning", "Joins", "Subqueries"],
  },

  {
    title: "COVID-19 Data Analysis and Visualisation",
    image: covid,
    url: "https://github.com/glenqa/Data-Portfolio/tree/main/covid19_analysis",
    description:
    "This python data analysis project analyses global COVID-19 data to uncover trends and insights across different countries using data preprocessing, trend analysis, and visualisation to provide a comprehensive view of the pandemic's progression and its effects.",
    technologies: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Trend Analysis", "Geospatial Analysis", "Data Cleaning"],
  },

  {
    title: "Amazon Customer Data Analysis and Visualisation",
    image: amazon,
    url: "https://github.com/glenqa/Data-Portfolio/tree/main/amazon_customer_data",
    description:
    "A Python-based project analyzing Amazon review data to uncover customer behavior and purchasing trends. It features data preprocessing, sentiment analysis, and customer segmentation to inform targeted marketing strategies and improve product insights.",
    technologies: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "SQLite", "TextBlob", "Customer Segmentation:", "Product Performance Analysis", "Sentiment Analysis"],
  },

  {
    title: "Interactive Sales Dashboard Visualisation",
    image: dashboard,
    url: "https://public.tableau.com/app/profile/glenda.tay/viz/salesdashboard_17359844461880/Dashboard",
    description:
    "Built a Tableau dashboard to visualize 2022 sales, profit, and quantity trends, with interactive filters and YoY comparisons to highlight top-performing months and product categories.",
    technologies: ["Tableau", "Data Cleaning", "Data Visualisation"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
