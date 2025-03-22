import  express, { ErrorRequestHandler }  from "express";
import { userRouter } from "./routes/userRoute";
import { errorHandler } from "./errors/errorHandler";
import { authRouter } from "./routes/authRoute";

const app = express();

app.use(express.json());
app.use(authRouter);
app.use(userRouter);
app.use(errorHandler as ErrorRequestHandler);

export { app };