import { PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

const prisma = new PrismaClient()

async function main() {
    await createUserAndPost()
    retrieveUsers()
    
}

async function createUserAndPost() {
    const user1 = await prisma.user.create({
        data: {
            name: 'gil2',
            email: 'g4@hotm.com',
            posts: {
                create: {
                    title: 'Another story of Sleep',
                    content: 'Sleepy hollow was a small village that got destroyed',
                    published: true,
                }
            }
        }
    })
    console.log(user1)
}

async function retrieveUsers() {
    const users = await prisma.user.findMany({
        include: {
            _count: true,
            posts: true
        }
    })
    console.dir(users, { depth: null })
}

async function createUser() {
    const user1 = await prisma.user.create({
        data: {
            name: 'Simon',
            email: 'sim@hotm.com'
        }
    })
    const user2 = await prisma.user.create({
        data: {
            name: 'Mary',
            email: 'mar@tt.com'
        }
    })
    console.log(user2)
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