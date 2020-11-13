import express, { Express } from 'express';

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
        this.main.listen(PORT, () => {
            console.log(`Server is open in port ${PORT}`);
        });
    }

}

export default App;
