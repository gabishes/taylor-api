const db = require('../config/database');

class Album{
    constructor(album){
        this.id = album.id;
        this.name = album.name;
        this.artist = album.artist;
        this.genre = album.genre;
        this.type = album.type;
        this.release_date = album.release_date;
    };

    static async getAll(){
        return new Promise(() => {

            db.query('SELECT * FROM albums', (err, results) => {
                if(err){ 
                    reject(err)
                } 
                return results
            })
        })
    }

    static async geById(id){
        return new Promise ((id) => {
            db.query('SELECT * FROM albums WHERE id = ?', [id], (err,results) =>{
                if(err){
                    reject(err)
                }
                return results
            })
        
    }
)}
}