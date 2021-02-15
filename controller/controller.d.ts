declare class Controller {
    home(req: any, res: any): Promise<void>;
    auth(req: any, res: any): Promise<string>;
    authA(req: any, res: any): Promise<string>;
    createTable(req: any, res: any): Promise<void>;
    createUser(req: any, res: any): Promise<void>;
    getUsers(req: any, res: any): Promise<void>;
    getUserById(req: any, res: any): Promise<void>;
    updateUser(req: any, res: any): Promise<void>;
    deleteUser(req: any, res: any): Promise<void>;
}
declare const _default: Controller;
export default _default;
