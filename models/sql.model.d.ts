declare class Model {
    static getTableCreationQuery(): Promise<unknown>;
    static insertData(id: number, name: string, address: string): Promise<unknown>;
    static getData(): Promise<unknown>;
    static getDataById(id: number): Promise<unknown>;
    static updateById(id: number, property: string, value: string): Promise<unknown>;
    static deleteById(id: number): Promise<unknown>;
}
export default Model;
