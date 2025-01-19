import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with expertise in React.js and modern web technologies like HTML, CSS, JavaScript, and Redux Toolkit. I specialize in building scalable and efficient applications, and I have extensive experience with Firebase, Node.js, and Express. My backend skills extend to working with databases like MongoDB and MySQL.

In addition to Full Stack Development, I have a strong focus on Frontend Development, building intuitive and user-friendly interfaces. I am deeply invested in the world of AI and Machine Learning, with a particular interest in Natural Language Processing (NLP), using tools like Ollama, LangChain, and Hugging Face to power educational and classification systems.

I have a solid foundation in Data Structures, Algorithms, and Computer Networks, which strengthens my problem-solving abilities and helps me optimize the performance of applications. My work spans diverse areas, from machine learning classification models to real-world projects like educational chatbots and road accident analysis systems.

With a keen interest in Cloud technologies, I’m continuously working to enhance my skills and push the boundaries of what can be achieved through code. My commitment to accessibility, scalability, and clean code makes me a valuable asset to any team or project.`;

export const DOMAINS_OF_INTEREST = [
  {
    title: "Machine Learning",
    description: `I am deeply interested in Machine Learning, particularly in areas such as classification, model fine-tuning for domain-specific tasks, and NLP. I enjoy exploring large language models (LLMs), prompt engineering, and utilizing cutting-edge techniques like Retrieval-Augmented Generation (RAG) to enhance model performance and solve real-world problems.`,
    technologies: ["Python", "Machine Learning", "NLP", "LLMs", "Classification", "TensorFlow", "PyTorch", "RAG"],
  },
  {
    title: "Web Development",
    description: `I have a passion for building dynamic, user-centric web applications. My expertise lies in full-stack web development, using modern technologies like the MERN stack (MongoDB, Express.js, React.js, Node.js) and Flask. I love crafting responsive, scalable applications that provide seamless experiences for users.`,
    technologies: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Natural Language Processing (NLP)",
    description: `I am fascinated by the capabilities of NLP, especially in working with large language models (LLMs) and fine-tuning them for specific tasks such as text summarization, classification, and question answering. I am also exploring prompt engineering and RAG techniques to improve model outputs and create more sophisticated NLP applications.`,
    technologies: ["Python", "NLP", "LLMs", "Hugging Face", "TensorFlow", "PyTorch", "RAG", "Text Classification"],
  },
  {
    title: "Computer Vision",
    description: `I am interested in using computer vision to solve practical problems in various industries, such as image recognition, object detection, and video analysis. I have experience using libraries like OpenCV and TensorFlow to process and interpret visual data, and I am continuously learning new methods to improve model accuracy and efficiency.`,
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Image Processing", "Object Detection"],
  },
  {
    title: "Agile Methodologies",
    description: `I believe in the power of Agile methodologies to build software efficiently and adapt to changing requirements. I apply Agile principles to manage projects and foster collaboration, ensuring that teams can iterate quickly and produce high-quality, scalable web applications in a fast-paced environment.`,
    technologies: ["Agile", "Scrum", "Kanban", "Project Management", "Collaboration", "Teamwork"],
  },
];


export const EDUCATION = [
  {
    year: "2021 - Now",
    degree: "B.Sc. in Computer Science",
    institution: "North South University, Dhaka, Bangladesh",
    description: `Studying Computer Science and Engineering at NSU since October, 2021. Engaging with cutting-edge technology, coding, and problem-solving, preparing for a future in the digital world.`,
  },
  {
    year: "2017 - 2019",
    degree: "Intermediate | Science",
    institution: "Milestone College, Uttara, Dhaka.",
    description: `Studied Science at Milestone College for an enriching experience, embracing innovative learning, and preparing for future academic and professional success.`,
  },
];

export const PROJECTS = [
  {
    title: "Educational Chatbot using RAG",
    image: project1, // Add image link here
    description:
      "Developed a lightweight, small language model (SLM)-based educational chatbot for offline and device-efficient operations. Designed a user-friendly interface and achieved 75% question-answering accuracy using the RAGChecker framework on a custom dataset of 4,000 questions.",
    technologies: ["LLMs", "Python", "Ollama", "LangChain", "HuggingFace", "FastAPI", "Prompt Engineering", "Git"],
    githubLink: "https://github.com/sazzadadib", // Add GitHub link here
    liveLink: "", // Add live link here
  },
  {
    title: "Road Accident Analysis System",
    image: project2, // Add image link here
    description:
      "Predicted patient status and injury type using the 'Road Traffic Accident Dataset, Rawalpindi-Punjab, Pakistan'. Achieved 99.1% accuracy for patient status prediction and 89% accuracy for injury type prediction. Contributed to social awareness and emergency response strategies through detailed data analysis.",
    technologies: ["Python", "Scikit-learn", "Numpy", "Pandas", "Git"],
    githubLink: "https://github.com/sazzadadib", // Add GitHub link here
    liveLink: "", // Add live link here
  },
  {
    title: "Agile-Driven Movie Reservation Website",
    image: project3, // Add image link here
    description:
      "Collaborated with a team to develop a scalable movie reservation website using Agile Scrum methodology. Contributed to frontend and backend development, adhering to the MVC architectural pattern. Extensively documented the codebase using JSDoc and designed unit tests with Jest.",
    technologies: ["Node.js", "React", "MongoDB", "Postman", "Jest", "Trello", "GitHub Wiki", "JSDoc", "Git"],
    githubLink: "https://github.com/sazzadadib", // Add GitHub link here
    liveLink: "", // Add live link here
  },
  {
    title: "Viper Travel Booking Website",
    image: project4, // Add image link here
    description:
      "Developed a travel booking website featuring SQL-based dynamic CRUD API functionality. Implemented end-to-end features for travel and hotel booking, delivering a seamless user experience for efficient travel planning.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "Git"],
    githubLink: "https://github.com/sazzadadib", // Add GitHub link here
    liveLink: "", // Add live link here
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, built using React, Tailwind CSS, and Framer Motion for smooth animations.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/sazzadadib",
    liveLink: "",
  },
  {
    title: "School Management System",
    image: project6, // Add image link here
    description:
      "Built a comprehensive School Management System using Core Java, designed to handle administrative tasks such as student registration, grades management, attendance tracking, and reporting. The system features a GUI built with Java Swing for an intuitive interface, making school management more efficient.",
    technologies: ["Core Java", "GUI (Java Swing)", "Git"],
    githubLink: "https://github.com/sazzadadib", // Add GitHub link here
    liveLink: "", // Add live link here
  },
];


export const CONTACT = {
  address: "Uttara, Dhaka-1230, Bangladesh ",
  phoneNo: "+8801630178489 ",
  email: "sazzad.adib1@gmail.com",
};
