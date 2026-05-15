const config = {
  title: "Manu Kumar | AI Enthusiast",
  description: {
    long: "Explore the portfolio of Manu Kumar, a Computer Science Engineer with experience in Development & building interactive websites.",
    short:
      "Discover the portfolio of Manu Kumar, a creative technologist.",
  },
  keywords: [
    "Manu",
    "Manu Kumar",
    "manukumar",
    "Manu Kumar portfolio",
    "portfolio",
    "development",
    "creative technologist",
    "web development",
    "interactive websites",
    // "GSAP",
    // "React",
    // "Next.js",
    // "Spline",
    // "Framer Motion",
    "AWS",
    "DevSecOps",
    "AIOps",
    "Azure",
  ],
  author: "Manu Kumar",
  email: ["manuchauhan2004", "gmail.com"].join("@"),
  site: "https://manukumar.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    phone: "tel:8076003185",
    linkedin: "https://www.linkedin.com/in/manu-chauhan-hades",
    instagram: "https://www.instagram.com/ehh__manu",
    facebook: "https://www.facebook.com/manukumar",
    github: "https://github.com/HADESOO7",
  },
};
export { config };
