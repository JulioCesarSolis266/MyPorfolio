import shiftManagementImg from "../assets/shiftManagementImg.jpg";
import financeManagerImg from "../assets/financeManagerImg.jpg";

const projects = [
  {
    id: 1,
    title: "Appointment Manager",
    description:
      "REST API for managing appointments with user administration panel",
    img: shiftManagementImg,
    stack: ["React", "Node", "Express", "PostgreSQL"],
    urlDeploy: "https://turnos-manager.vercel.app/",
    urlRepoBackend: "https://github.com/JulioCesarSolis266/manicuria-backend",
  },
  {
    id: 2,
    title: "Personal Finance Manager",
    description:
      "REST API for managing income and expenses with a modular structure",
    img: financeManagerImg,
    stack: ["Express", "Prisma", "PostgreSQL", "JWT", "Swagger"],
    urlDeploy: "https://finapp-track.vercel.app/login",
    urlRepoBackend:
      "https://github.com/JulioCesarSolis266/personal-finance-backend",
  },
];

export default projects;
