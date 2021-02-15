import db from '../config/db';

class Model {
  static getTableCreationQuery() {
    const sql =
      "CREATE TABLE USERS(id int AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))";

    return new Promise((resolve, reject) => {
      db.query(sql, async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }

  static insertData(id:number, name:string, address:string) {
    const sql = "insert into USERS values (?, ?, ?)";

    return new Promise((resolve, reject) => {
      db.query(sql, [id, name, address], async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }

  static getData() {
    const sql = "SELECT * from USERS";

    return new Promise((resolve, reject) => {
      db.query(sql, async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }

  static getDataById(id:number) {
    const sql = "SELECT * from USERS WHERE id=?";

    return new Promise((resolve, reject) => {
      db.query(sql, [id], async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }

  static updateById(id:number, property:string, value:string) {
    const sql = `UPDATE USERS SET ${property}=? where id=?`;

    return new Promise((resolve, reject) => {
      db.query(sql, [value, id], async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }

  static deleteById(id:number) {
    const sql = "DELETE FROM USERS WHERE id=?";

    return new Promise((resolve, reject) => {
      db.query(sql, [id], async (err, result) => {
        if (!err) {
          return resolve(result);
        } else {
          return reject(err);
        }
      });
    });
  }
}

export default Model;