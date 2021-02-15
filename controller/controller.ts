
import Model from "../models/model";
import ModelSql from "../models/sql.model";

class Controller {
  async home(req: any, res: any) {
    try {
      const users = await Model.find();
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  }

  async auth(req: any, res: any) {
    const { username, password } = req.query;
    const customHeader = req.headers["H-custom"];
  
    return "logged in";
  }

  async authA(req: any, res: any) {
    const customHeader = req.headers["H-custom"];
    return "logged in";
  }

   async createTable(req:any, res:any) {
    try {
      const response = await ModelSql.getTableCreationQuery();
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  }

  async createUser(req:any, res:any) {
    try {
      const { id, name, address } = req.body;
      const response = await ModelSql.insertData(id, name, address);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
  
  async getUsers(req:any, res:any) {
    try {
      const response = await ModelSql.getData();
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
  
  async getUserById(req:any, res:any)  {
    try {
      const response = await ModelSql.getDataById(req.params.id);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
  
  async updateUser(req:any, res:any) {
    try {
      const id = req.params.id;
      const { property, value } = req.body;
      const response = await ModelSql.updateById(id, property, value);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
  
  async deleteUser(req:any, res:any) {
    try {
      const response = await ModelSql.deleteById(req.params.id);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
}

export default new Controller();
