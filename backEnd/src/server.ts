import App from './app';
import DotEnv from 'dotenv';

DotEnv.config();

const {
    PORT,
    STATUS_PROJECT
} = process.env as any;

console.log(PORT, STATUS_PROJECT);
if (STATUS_PROJECT == 'DEVELOPMENT') {
    new App({
        PORT
    });
} else {
    new App({
        PORT: 3333
    });
}
