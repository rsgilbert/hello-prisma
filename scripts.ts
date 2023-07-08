import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    retrieveUsers()
    
}

async function retrieveUsers() {
    const users = await prisma.user.findMany()
    console.log(users)
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
    .catch(async e => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })