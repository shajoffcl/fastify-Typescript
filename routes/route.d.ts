/// <reference types="node" />
import { FastifyPluginAsync } from "fastify";
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
declare const _default: FastifyPluginAsync<MyPluginOptions, import("http").Server>;
export default _default;
