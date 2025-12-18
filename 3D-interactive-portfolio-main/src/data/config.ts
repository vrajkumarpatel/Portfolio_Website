const config = {
  title: "Vrajkumar Patel | Computer Science Student & Full-Stack Developer",
  description: {
    long: "Vrajkumar Patel - Computer Science student with AI concentration, specializing in machine learning algorithms, neural networks, and intelligent systems development.",
    short:
      "Computer Science student with AI concentration, specializing in machine learning algorithms, and intelligent systems development.",
  },
  keywords: [
    "Vrajkumar",
    "Vrajkumar Patel",
    "Computer Science",
    "AI",
    "Machine Learning",
    "Full-Stack Developer",
    "Web Development",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
  ],
  author: "Vrajkumar Patel",
  email: "",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/vrajkumar-patel-87200017b",
    instagram: "https://instagram.com/vraj___patel__07",
    facebook: "",
    github: "https://github.com/vrajkumarpatel",
  },
};
export { config };
