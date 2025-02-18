import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'
})

app.listen(8080, ()=>{
    console.log('listening on');
    
})

db.connect((err)=>{
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
      }
      console.log('Connected to the database as ID ' + db.threadId);
})


app.get('/', (req, res) => {
    const sql = "SELECT * FROM arday";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "error inside server"})
        return res.json(result); 
    })
})



app.post('/arday', (req, res) => {
    const sql = "insert into arday(ID, Name, Address, Email) values(?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.address,
        req.body.email
    ];
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err)
        return res.json(result); 
    })
})

app.get('/edit/:id', (req, res) => {
    const sql = "SELECT * FROM arday where ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "error inside server"})
        return res.json(result); 
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE arday SET Name=?, Address=?, Email=? WHERE ID=?";
    const values = [
        req.body.name,
        req.body.address,
        req.body.email,
        req.params.id
    ]
    db.query(sql, values, (err, result) => {
        if(err) return res.json({Message: "error inside server"})
        return res.json(result); 
    })
})


app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM arday WHERE ID=?";
    const id = req.params.id;
    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "error inside server"})
        return res.json(result); 
    })
})


app.get('/readUser', (req, res) => { 
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "error inside server"})
        return res.json(result); 
    })
})


app.post('/createUser', (req, res) => {
    const sql = "insert into user(id, name, email, password) values(?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err)
        return res.json(result); 
    
    })
})