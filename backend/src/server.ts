import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import destinationRoutes from "./routes/destinationRoutes";
import flightRoutes from "./routes/flightRoutes";
import cors from "cors";

const app: Application = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Running...");
});

//Routes
app.use("/destinations", destinationRoutes);
app.use("/citycountry", flightRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
