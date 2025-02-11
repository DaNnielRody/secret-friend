import express from "express";
import sequelize from "./src/db/db.js";
import friendRoute from './src/routes/friendRoute.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/secret-friends", friendRoute)

sequelize
    //.sync() // if i need to ensure data consistency, but it's alreaty set up
    .authenticate()
    .then(() => {
        console.log("Database authenticated");
        app.listen(port, () => {
            console.log("Rodando aqui...")
        });
    })
    .catch((error) => {
        console.error("Something happened", error);
    });

