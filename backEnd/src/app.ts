import express, { Express } from 'express';
import postgres from './databases/postgres';
import Mongo from './databases/mongo';
interface AppConfig {
    PORT?: number
}

class App {

    public main: Express;

    constructor({ PORT } : AppConfig){
        this.main = express();
        this.connectDatabase();
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

}

export default App;
