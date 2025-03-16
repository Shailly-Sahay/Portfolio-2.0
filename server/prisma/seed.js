import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames) {
  for (const fileName of orderedFileNames) {
    const modelName = path.basename(fileName, path.extname(fileName)); // Extract model name from file
    const capitalizedModel =
      modelName.charAt(0).toUpperCase() + modelName.slice(1); // Capitalize first letter

    if (!prisma[capitalizedModel]) {
      console.warn(
        `⚠️ No Prisma model found for ${capitalizedModel}, skipping...`
      );
      continue;
    }

    try {
      await prisma[capitalizedModel].deleteMany({});
      console.log(`✅ Cleared data from ${capitalizedModel}`);
    } catch (error) {
      console.error(`❌ Error clearing data from ${capitalizedModel}:`, error);
    }
  }
}

async function main() {
  const dataDirectory = path.join(process.cwd(), "prisma", "seedData");
  console.log("🔍 Checking seed data directory at:", dataDirectory);

  const orderedFileNames = ["project.json", "techStack.json"]; // Correct filenames

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const modelName = path.basename(fileName, path.extname(fileName));
    const capitalizedModel =
      modelName.charAt(0).toUpperCase() + modelName.slice(1);

    if (!prisma[capitalizedModel]) {
      console.warn(`⚠️ No Prisma model found for ${fileName}, skipping...`);
      continue;
    }

    const filePath = path.join(dataDirectory, fileName);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ File not found: ${filePath}, skipping...`);
      continue;
    }

    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    try {
      for (const data of jsonData) {
        await prisma[capitalizedModel].create({ data });
      }
      console.log(`✅ Seeded ${capitalizedModel} with data from ${fileName}`);
    } catch (error) {
      console.error(`❌ Error seeding data for ${capitalizedModel}:`, error);
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
