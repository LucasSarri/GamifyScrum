import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { AppDataSource } from "./data-source";
import routes from "./routes";


AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(bodyParser.urlencoded({extended: false}));

    app.set('views', path.join(__dirname, 'views'));

    app.set('view engine', 'ejs');

    app.use(express.static(path.join(__dirname + '/public')));

    app.use(routes);

    return app.listen(process.env.PORT);
});