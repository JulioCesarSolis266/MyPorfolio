import shiftManagementImg from "../assets/shiftManagementImg.jpg";
import financeManagerImg from "../assets/financeManagerImg.jpg";

  const projects = [
    {
      id:1,
      title: "Gestor de turnos",
      description:
        "Sistema de gestión de turnos con autenticación y panel de administración.",
      img: shiftManagementImg,
      stack: ["React", "Node", "Express", "PostgreSQL"],
      urlDeploy: "https://manicuria-frontend.vercel.app/",
      urlRepoBackend: "https://github.com/JulioCesarSolis266/manicuria-backend",
    },
    {
      id:2,
      title: "Backend de finanzas personales",
      description: "API REST para gestión de ingresos y gastos.",
      img: financeManagerImg,
      stack: ["NestJS", "TypeScript", "PostgreSQL"],
      urlDeploy: null,
      urlRepoBackend: "https://github.com/JulioCesarSolis266/personal-finance-backend"
    },
  ];

  export default projects;

