import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});

connection.connect((err) => {
  if (!err) {
    console.log("MySQL database connected");
  } else {
    console.log("Unable to connect with db", err);
  }
});

export default connection;