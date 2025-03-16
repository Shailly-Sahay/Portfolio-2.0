import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const techStackController = {
  getAllTechStack: async (req, res) => {
    try {
      const techStacks = await prisma.techStack.findMany();
      res.json(techStacks);
    } catch (error) {
      res.status(500).json({
        message: `Error retrieving Tech Stacks: ${error.message}`,
        error,
      });
    }
  },
};

export default techStackController;
