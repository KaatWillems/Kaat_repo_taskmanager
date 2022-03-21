const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES
const addTask2 = (data) => {
    let db = new sqlite3.Database('db/db.taskmanager');


    db.run(`INSERT INTO taskmanager (task) VALUES (?)`, [data[0].task], function(err) {
        if (err) {
          return console.log(err);

        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
  
    console.log(data)
     db.close();
    

}

const showTask2 = (req,res) => {
    console.log("showtask2 is working from backend");
    let sendData =[];
    let sql = `SELECT * FROM taskmanager`

    let db = new sqlite3.Database('db/db.taskmanager', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the taskmanager database.');
    });
     db.serialize(() => {
      db.each(sql, [], (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row)
        sendData.push(row)
        console.log(row);
  
      });
      // res.send(sendData)
    });
  
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log(sendData)
      res.send(sendData)
      console.log('Close the database connection.');
    });
  
}

const updateTask2 = () => {
  console.log("updateTask2 is working from backend");
 
  let sql = `UPDATE taskmanager
  SET status = done
  WHERE task = sleep`;

  let db = new sqlite3.Database('db/db.taskmanager');


    db.run(sql, [data[0].task], function(err) {
        if (err) {
          return console.log(err);

        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
  
    console.log(data)
     db.close();

}


 exports.addTask2 = addTask2;
 exports.showTask2 = showTask2;
 exports.updateTask2 = updateTask2;