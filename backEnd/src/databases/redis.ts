import redis from 'redis';
import Dontenv from 'dotenv';

const {
    REDIS_HOST,
    REDIS_PORT,
} = process.env as any;

const client = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT
});

client.on("connect", (error) => {
    console.log("Conection error" + error);
});

export default client;