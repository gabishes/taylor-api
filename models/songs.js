const db = require('../config/database');

class Songs{
    constructor(songs){
        this.id = songs.id;
        this.name = songs.name;
        this.duration = songs.duration;
        this.composer = songs.composer;
        this.type = songs.type;
    };

    static async getAll(){
        return new Promise(() => {

            db.query('SELECT * FROM songs', (err, results) => {
                if(err){ 
                    reject(err)
                } 
                return results
            })
        })
    }
   
        static async getById(id){
            return new Promise ((id) => {
                db.query('SELECT * FROM songs WHERE id = ?', [id], (err,results) =>{
                    if(err){
                        reject(err)
                    }
                    return results
                })
    }
        
)}

}