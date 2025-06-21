
export interface CaseStudy {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  links?: { title: string; url: string }[];
  websiteUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fjalla",
    name: "Fjalla",
    description: "Tackling fair artist compensation in music streaming. This solution helps artists earning 400% more while building a closer relation to their superfans. This helps not only successful artists to earn more, but emerging artists to make being a musician a more feasible career path.",
    image: "/lovable-uploads/318cf5d0-5c36-4c83-8176-645878c9f31e.png",
    category: "MusicTech",
    impact: "Enabling fair compensation for artists worldwide",
    links: [
      { title: "Case Study", url: "https://www.fjalla.net" }
    ]
  },
  {
    id: "g-cars",
    name: "G-Cars",
    description: "Frauen fahren Frauen. Ein Mobility Service in Berlin exklusiv für Frauen der Frauen sicher an ihr Ziel bringt.",
    image: "/lovable-uploads/b5add874-0ef7-48e7-b7a9-fb320ec24ebe.png",
    category: "MobilityTech",
    impact: "Safe mobility service exclusively for women in Berlin",
    websiteUrl: "https://g-cars.co/",
    links: [
      { title: "Case Study", url: "https://g-cars.co/" }
    ]
  },
  {
    id: "databorg",
    name: "DataBorg",
    description: "Knowledge Management automating turning unstructured data into structured data and holistic single source of truth knowledge graphs. This helps companies to extract and ingest their proprietary knowledge into AI systems.",
    image: "/lovable-uploads/d1a46dd4-3b87-49d3-a866-feaf1b05e5f8.png",
    category: "AI & Data",
    impact: "Transforming enterprise knowledge management",
    links: [
      { title: "Case Study", url: "https://www.youtube.com/watch?v=gNTSwkVgLas" }
    ]
  },
  {
    id: "gymcraft",
    name: "GymCraft",
    description: "Fitness gamification turning real fitness equipment into gamecontrollers and turning workout into serious fun. This not only helps young people to build healthy habits, but also provides a sugar coating motivation for workout.",
    image: "/lovable-uploads/d9617add-4f4f-4228-9aaa-8dec80a6e1af.png",
    category: "HealthTech",
    impact: "Revolutionizing fitness motivation through gamification",
    websiteUrl: "https://www.gymcraft.es",
    links: [
      { title: "Case Study", url: "#" }
    ]
  }
];
