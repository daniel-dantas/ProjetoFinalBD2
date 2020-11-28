import express, { Express } from 'express';
import postgres from './databases/postgres';
interface AppConfig {
    PORT?: number
}

class App {

    public main: Express;

    constructor({ PORT } : AppConfig){
        this.main = express();
        this.listen((PORT) ? PORT : 8000);
    }

    private listen(PORT: number) {
        postgres.authenticate().then(() => {
            console.log("Postgres conected");
        }).catch((error) => {
            console.log("Conection error" + error);
        });

        this.main.listen(PORT, () => {
            console.log(`Server is open in port ${PORT}`);
        });
    }

}

export default App;
