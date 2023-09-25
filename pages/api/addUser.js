import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function handler(req, res) {
  const newUser = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image
    },
  });

  res.json(newUser)

}
