const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create Employer
  const employer = await prisma.user.upsert({
    where: { email: 'employer@demo.com' },
    update: {},
    create: {
      email: 'employer@demo.com',
      name: 'Ravi - TechCorp',
      role: 'employer',
    },
  })

  // Create Candidates
  const c1 = await prisma.user.upsert({
    where: { email: 'ananya@demo.com' },
    update: {},
    create: {
      email: 'ananya@demo.com',
      name: 'Ananya Sharma',
      role: 'learner',
      hireabilityIndex: 1420,
      location: 'Bangalore, India',
      skills: {
        create: [
          { name: 'React', proficiency: 'Mastered' },
          { name: 'Node.js', proficiency: 'Proficient' },
        ],
      },
      projects: {
        create: [
          { title: 'E-commerce Microservices', score: 92, feedback: 'Excellent architecture.' },
        ],
      },
    },
  })

  const c2 = await prisma.user.upsert({
    where: { email: 'rahul@demo.com' },
    update: {},
    create: {
      email: 'rahul@demo.com',
      name: 'Rahul Verma',
      role: 'learner',
      hireabilityIndex: 1280,
      location: 'Pune, India',
      skills: {
        create: [
          { name: 'DevOps', proficiency: 'Proficient' },
          { name: 'Docker', proficiency: 'Mastered' },
        ],
      },
      projects: {
        create: [
          { title: 'CI/CD Pipeline Design', score: 88, feedback: 'Solid automation strategy.' },
        ],
      },
    },
  })

  console.log({ employer, c1, c2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
