import { createServer } from "node:http";
import next from "next";
import { parse } from "node:url";
import { Server } from "socket.io";
import Message from "./app/models/message.js"
import connectDB from "./app/utils/db.js"
import { createClerkClient } from "@clerk/backend";



const dev = true;
const hostname = "localhost";
const port = 3000;


const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
    const httpServer = createServer((req, res) => {
        const parseUrl = parse(req.url, true);
        handler(req, res, parseUrl);
    });

    const io = new Server(httpServer, {
        connectionStateRecovery: {}
    });

    io.on('connection', async (socket) => {
        console.log('a user is connected!');
        await connectDB()

        socket.on('message', async (msg) => {
            console.log('message : ' + msg.content)
            const userId = msg.senderId
            const user = await clerkClient.users.getUser(userId)
            const senderDetails = {
                username: user.fullName,
                profilePicUrl: user.profileImageUrl
            }
            const newMessage = await Message.create(msg)
            const message = { ...newMessage._doc, senderDetails: senderDetails }
            console.log(senderDetails, msg, message, newMessage)
            io.to(msg.roomId).emit('message', message)
        })

        socket.on('join', (roomId) => {
            socket.join(roomId)
        })

        socket.on('leave', (roomId) => {
            socket.leave(roomId)
        })

        socket.on('disconnect', () => {
            console.log('user is disconnected!')
        })
    })

    httpServer
        .once("error", (err) => {
            console.log(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        })
})