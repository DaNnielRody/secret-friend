import express from "express";
import sequelize from "./src/db/db";
import friendRoute from './src/routes/friendRoute.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/secret-friends", friendRoute)

sequelize
    //.sync() if i need to ensure data consistency, but it's alreaty set up
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

