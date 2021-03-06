import redis from 'redis';
import DotEnv from 'dotenv';

DotEnv.config();

const {
    REDIS_HOST,
    REDIS_PORT,
} = process.env as any;

const client = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT
});

client.on("connect", (error) => {
    console.log('Redis conected!');
});

export default client;