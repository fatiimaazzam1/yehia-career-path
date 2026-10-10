
export type Opportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    location: "Beirut",
    description:"Build responsive interfaces and work with the team to create user-friendly web experiences.",
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    company: "Code Harbor",
    location: "Remote",
    description:"Collaborate with senior developers to design, develop, and maintain software applications.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "Pixel Workshop",
    location: "Tripoli",
    description:"Assist in the development of web applications and gain hands-on experience in a professional environment.",
  },
  {
  id: "4",
  title: "Full-Stack Developer",
  company: "Future Tech",
  location: "Saida",
  description:"Work on both front-end and back-end development tasks, contributing to the entire software development lifecycle.",
}
];
