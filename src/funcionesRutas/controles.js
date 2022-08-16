const control = {}


control.listar = (req,res) =>{
    req.getConnection((err,conn)=>{
        conn.query("select * from users",(err,rows) =>{
            res.render("prueba.ejs")
        })
    })
}

control.agregar = (req,res) =>{
    req.getConnection((err,conn)=>{
        const {title, url, description } = req.body
        const newLink = {
            title,
            url,
            description
        }
        console.log(newLink.title)
        conn.query(`INSERT INTO links set ?`,[newLink],(err,rows) =>{
            if(err){
                console.log(err)
            }
            res.redirect('/')
        })
    })
}

module.exports = control