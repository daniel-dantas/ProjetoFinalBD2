import App from './app';
import DotEnv from 'dotenv';

DotEnv.config();

const {
    PORT,
    STATUS_PROJECT
} = process.env as any;

if (STATUS_PROJECT === 'DEVELOPMENT') {
    new App({
        PORT
    });
} else {
    new App({
        PORT: 3333
    });
}
