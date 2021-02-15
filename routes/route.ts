import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import controller from "../controller/controller";

import QueryStringSchema from "../schemas/QueryString.json";
import HeadersSchema from "../schemas/Haeders.json";

import { QuerystringSchema as QuerystringSchemaInterface } from "../types/QueryString";
import { HeadersSchema as HeadersSchemaInterface } from "../types/Haeders";

declare module "fastify" {
  interface FastifyRequest {
    myPluginProp: string;
  }
  interface FastifyReply {
    myPluginProp: number;
  }
}

export interface MyPluginOptions {
  myPluginOption: string;
}

interface IQueryString {
  username: string;
  password: string;
}

interface IHeaders {
  "H-custom": string;
}

const myPluginAsync: FastifyPluginAsync<MyPluginOptions> = async (
  fastify,
  options
) => {
  fastify.decorateRequest("myPluginProp", "super_secret_value");
  fastify.decorateReply("myPluginProp", options.myPluginOption);

  // auth route with object of requestGenericsObject
  fastify.get<{
    Querystring: IQueryString;
    Headers: IHeaders;
  }>("/auth", controller.auth);

  // auth route with object of requestGenericsObject and preValidation
  fastify.get<{
    Querystring: QuerystringSchemaInterface;
    Headers: HeadersSchemaInterface;
  }>(
    "/authA",
    {
      schema: {
        querystring: QueryStringSchema,
        headers: HeadersSchema,
      },
      preValidation: (req, reply, done) => {
        const { username, password } = req.query;
        done(username != "admin" ? new Error("Must be admin") : undefined);
      },
    },
    controller.authA
  );

  //route for db data fetching from mongoDB
  fastify.get("/mUsers", controller.home);

  //route for table creation
  fastify.get('/createTable', controller.createTable);

  //route for user registration
  fastify.post('/register', controller.createUser);

  //route for get user data
  fastify.get('/users', controller.getUsers);

  //route for get user by id
  fastify.get('/user/:id', controller.getUserById);

  //route for update user by id
  fastify.put('/update/:id', controller.updateUser);

  //route for delete user by id
  fastify.delete('/delete/:id', controller.deleteUser);
};

export default fp(myPluginAsync, "3.x");
