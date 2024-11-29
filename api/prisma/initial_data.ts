/** PARA RODAR O SCRIPT
 * npm install -g ts-node
 *
 * cd prisma
 * ts-node .\initial_data.ts
 */

import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const prisma = new PrismaClient();

const pets = [
  {
    name: "Christopher",
    sexo: "M",
    idade: 9,
    desc: "Cachorrinho ativo e brincalhão, ama correr atrás de bolinhas.",
    race: "border-collie",
    photoLink:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJPMdghYkf-H0JFQeNn9kAbLVAbwMqaxLCIiVujW1zfB3K798voV2JYc8qfvIUdwcIUHAHTFMxpQFwap9g5etn_g",
  },
  {
    name: "Josie",
    sexo: "F",
    idade: 15,
    desc: "Cachorrinha tranquila, adora um colo e é muito carinhosa.",
    race: "bulldog-frances",
    photoLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Hk6IU1OFHo9qAPHBNvgWaiYDZAN3GCvy_LJ-mBmq9WGt_spvG14ObhfHBFTkwx0YQ2D4GYNcAHQcySneI5CamREus0i0SHBFl5rTWQ",
  },
  {
    name: "Amanda",
    sexo: "F",
    idade: 3,
    desc: "Chihuahua cheia de energia, adora explorar e ser mimada.",
    race: "chihuahua",
    photoLink:
      "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view-400x267.jpg",
  },
  {
    name: "Max",
    sexo: "M",
    idade: 7,
    desc: "Golden retriever amigável, ótimo para famílias e adora nadar.",
    race: "golden-retriever",
    photoLink:
      "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
  },
  {
    name: "Bella",
    sexo: "F",
    idade: 4,
    desc: "Pinscher com muita personalidade, protetora e leal aos seus donos.",
    race: "pinscher",
    photoLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFdw7edZFbXN4uxI1MhgcVAFL2zMxd0qtjQ&s",
  },
];

async function createData() {
  try {
    await prisma.pet.createMany({
      data: pets,
    });
    console.log("Classes created successfully!");
  } catch (error) {
    console.error("Error creating class:", error);
  }
}

createData();
