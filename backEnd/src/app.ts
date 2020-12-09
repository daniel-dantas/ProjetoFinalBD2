import express, { Express, json, Request, Response } from 'express';
import Cors from 'cors';
import postgres from './databases/postgres';
import Mongo from './databases/mongo';
import Routes from './routes';

interface AppConfig {
    PORT?: number
}

class App {

    public main: Express;

    constructor({ PORT } : AppConfig){
        this.main = express();
        this.config();
        this.connectDatabase();
        this.routes();
        this.listen((PORT) ? PORT : 8000);
    }

    private listen(PORT: number) {
        this.main.listen(PORT, () => {
            console.log(`Server is open in port ${PORT}`);
        });
    }

    private connectDatabase(){
        // PostGres
        postgres.authenticate().then(() => {
            console.log("Postgres conected");
        }).catch((error) => {
            console.log("Conection error" + error);
        });

        // Mongoo
        Mongo.connect().then(() => {
            console.log('Mongo conected!');
        }).catch(err => {
            console.log('Connection error: ' + err);
        })

    }

    private routes(){
        this.main.get('/api/v1', (req: Request, res: Response) => {
            return res.status(200).json({

            });
        });
        this.main.use('/api/v1', Routes);
    }

    private config(){
        this.main.use(json());
        this.main.use(Cors());
    }

}

export default App;
