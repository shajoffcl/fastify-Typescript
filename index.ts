import fastify from "fastify";
import mongoose from "mongoose";
import routes from "./routes/route";

const PORT = process.env.PORT || 3031;
const Mongo_URI = "mongodb://localhost:27017/admin";

const server = fastify();

mongoose
  .connect(Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo database connected"))
  .catch((err) => console.log("Unable to connect with db", err));

const start = async () => {
  try {
    await server.listen(PORT);

    console.log(`Server is listening at port ${PORT}`);
  } catch (err) {
    console.log("error in", err);
    process.exit(1);
  }
};

server.get("/", async (req, reply) => {
  return "Server running";
});

server.register(routes).after((err) => {
  if (err) throw err;
});

start();
