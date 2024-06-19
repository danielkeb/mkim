-- CreateTable
CREATE TABLE "Users" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "members" (
    "memberID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "contactNumber" TEXT,
    "address" TEXT,
    "membershipID" INTEGER NOT NULL,
    "status" TEXT,
    "renewalDate" TIMESTAMP(3),
    "memberSince" TEXT,
    "user_Id" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "members_memberID_key" ON "members"("memberID");

-- CreateIndex
CREATE UNIQUE INDEX "members_membershipID_key" ON "members"("membershipID");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
