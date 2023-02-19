const pool = require("../dataBase/conection.js")

// Create User

const create = (req,res) => {
    const {name, pass, token} = req.body;
    const info = {name,pass}
    if (token !== "P43634FGR##"){return res.json("Invalid token")}
    if (name == null || name == undefined || name.length < 4 || name.length > 13 || pass.length > 13 || pass == null || pass == undefined || pass.length < 4){return res.json("The username and password must have at least 3 characters and a maximum of 12.");}
    
    pool.getConnection((e, con)=>{
      if (e) return console.log(e)
  
      con.query("SELECT name FROM users WHERE name = ?", name, (e, rows)=>{
        if (e) return res.json("Error creating users")
        console.log(rows)
        if (rows.length > 0){res.json("The username is already taken.")}
  
        else {
          con.query("INSERT INTO users SET ?",info, (e,rows)=>{
            if (e) return res.json("Error creating users")
            res.json("User created")
          })
        }
      })
      con.release();
    })
}

// Sign IN

const signIn = (req,res) => {
    const {name, pass, token} = req.body;
  if (token !== "P43634FGR##"){return res.json("Invalid token")}
  if (name == null || name == undefined || name.length < 4 || name.length > 13 || pass.length > 13 || pass == null || pass == undefined || pass.length < 4){return res.json("The data entered is incorrect");}
  
  pool.getConnection((e, con)=>{
    if (e) return console.log(e)

    con.query("SELECT name,pass FROM users WHERE name = ? AND pass = ?", [name,pass], (e, rows)=>{
      if (e) return res.json("Error")
      console.log(rows)
      if (rows.length > 0){res.json("Access allowed")}
      else {
        res.json("Incorrect username or password.")
      }
    })
    con.release();
  })
}

// GET single customer info

const getSingleCustomerInfo = (req,res) => {
    const {id, token} = req.params
    if (token !== "43WER354DF64"){console.log("Invalid token");return res.json("Invalid token")}
    pool.getConnection((e, con)=>{
        if (e) return res.json("error")
        con.query("SELECT * FROM phones WHERE id = ?",id, (e, rows)=>{
          res.json(rows)
        })
        con.release();
      })
}

// GET ALL customer info

const getCustomerInfo = (req,res) => {
  const {token} = req.params
  if (token !== "43WER354DF64"){console.log("Invalid token");return res.json("Invalid token")}
  pool.getConnection((e, con)=>{
      if (e) return res.json("error")
      con.query("SELECT * FROM phones ORDER BY datee DESC", (e, rows)=>{
        res.json(rows)
      })
      con.release();
    })
}

// Create customer Info

const createCustomerInfo = (req,res) => {

    const {customer, phone, repairs, datee,token} = req.body;
  const info = {customer, phone, repairs, datee}
  if (token !== "P43634FGR##"){console.log("Invalid token");return res.json("Invalid token")}
  if (customer == null || customer == undefined || customer == "" || phone == null || phone == undefined || phone == "" || repairs == null || repairs == undefined || repairs == "" || datee == null || datee == undefined || datee == ""){return res.json("Data missing");}

  pool.getConnection((e, con)=>{
    if (e) return console.log(e)

    con.query("INSERT INTO phones SET ?", info, (e, rows)=>{
      if (e){console.log(e); return res.json("Error creating customer");}
      res.json("Success")
    })
    con.release();
  })
  
}

// Change customer info

const changeCustomerInfo = (req,res) => {
    const {customer, phone, repairs, datee,token,id} = req.body;
  const info = {customer, phone, repairs, datee,id}
  if (token !== "P43634FGR##"){return res.json("Invalid token")}
  if (customer == null || customer == undefined || customer == "" || phone == null || phone == undefined || phone == "" || repairs == null || repairs == undefined || repairs == "" || datee == null || datee == undefined || datee == "" || id == null || id == undefined || id == ""){return res.json("Data missing");}

  pool.getConnection((e, con)=>{
    if (e) return console.log(e)

    con.query("UPDATE phones SET ? WHERE id = ?", [info, id], (e, rows)=>{
      if (e){console.log(e); return res.json("ERROR");}
      res.json("Success")
    })
    con.release();
  })
}

// DELETE customer info

const deleteCustomerInfo = (req,res) => {
    const {id,token} = req.params;

    console.log(token, id)
    if (token !== "P43634FGR3344"){return res.json("Invalid token")}
  
    pool.getConnection((e, con)=>{
      if (e) return console.log(e)
  
      con.query("DELETE FROM phones WHERE id = ?", id, (e, rows)=>{
        if (e){console.log(e); return res.json("ERROR");}
        res.json("Success")
      })
      con.release();
    })
}


const methods = {
    create,
    signIn,
    getCustomerInfo,
    createCustomerInfo,
    changeCustomerInfo,
    deleteCustomerInfo,
    getSingleCustomerInfo
  }

module.exports = methods 