import {pool} from '../db.js'

export const getClientes = async(req,res)=>{
    try{
        const [rows] = await pool.query('select * from cliente')
        res.json[rows]
    } catch (error) {
        return res.send('hay un error')

    }
    }

    export const getCliente = async(req,res)=>{
        try{
            const [rows] = await pool.query('select * from cliente where idcliente=?',req.params.id)
            if(rows.length<=0)
            res.json[rows]
        } catch (error) {
            return res.send('hay un error')
    
        }
        }

    export const postClientes = async(req,res)=>{
        const {ci,nombre,appaterno,apmaterno,direccion,telefono}= req.body
        try{
            const [rows] = await pool.query('insert into cliente(ci,nombre,appaterno,apmaterno,direccion,telefono)values(?,?,?,?,?,?),'[ci,nombre,appaterno,apmaterno,direccion,telefono])
            
            res.json[rows]
        } catch (error) {
            return res.send('hay un error')
    
        }
        }

      export const putClientes =(req,res)=>{
        res.send('modificando datos del cliente desde controllers')
      }

      export const patchClientes = async(req,res)=>{
        const {id}= req.params
        const {ci,nombre,appaterno,apmaterno,direccion,telefono}= req.body
        try{
            const [rows] = await pool.query('update cliente set ci= IFNULL(?,ci), nombre= IFNULL(?,nombre), appaterno= IFNULL(?,appaterno), apmaterno= IFNULL(?,apmaterno), direccion= IFNULL(?,direccion), telefono= IFNULL(?,telefono)  where idcliente=?',[ci,nombre,appaterno,apmaterno,direccion,telefono,id])
            if(rows.affectedRows === 0)
            res.json[rows]
        } catch (error) {
            return res.send('hay un error')
    
        }
        }
      export const deleteClientes =async(req,res)=>{
        try{
            const [rows] = await pool.query('delete from cliente where idcliente=?',req.params.id)
            if(rows.affectedRows === 0)
            res.json[rows]
        } catch (error) {
            return res.send('hay un error')
    
        }
        }
    