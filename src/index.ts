import app from './app';
import { AppDataSource } from './database/conexion';

async function main() {
    try {
        await AppDataSource.initialize();
        console.log('Base de datos Conectada')
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }

    }
}

main();