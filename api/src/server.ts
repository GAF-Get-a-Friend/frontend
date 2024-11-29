import express, { Application } from "express";
const cors = require("cors");
import { createUser, loginUser } from "./userController";
import { createPet, deletePet, getPets, updatePet } from "./petController";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.post("/users", createUser);
app.post("/login", loginUser);

app.post("/pets", createPet);
app.get("/pets", getPets);
app.put("/pets/:id", updatePet);
app.delete("/pets/:id", deletePet);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
