-- CreateEnum
CREATE TYPE "ProjectCategory" AS ENUM ('FULL_STACK', 'FRONTEND_3D', 'BLOCKCHAIN');

-- CreateTable
CREATE TABLE "TechStack" (
    "id" SERIAL NOT NULL,
    "tool" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "video" TEXT,
    "logo" TEXT,
    "category" "ProjectCategory" NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTechStack" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "techId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTechStack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechStack_tool_key" ON "TechStack"("tool");

-- AddForeignKey
ALTER TABLE "ProjectTechStack" ADD CONSTRAINT "ProjectTechStack_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechStack" ADD CONSTRAINT "ProjectTechStack_techId_fkey" FOREIGN KEY ("techId") REFERENCES "TechStack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
