import express from "express";
import cors from "cors";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/Database.js";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/users.js";
import AuthRoute from "./routes/auth.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

/*
(async () => {
  await db.sync();
})();
*/
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);

//store.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
