const db = require('../config/database');

class Shows{
    constructor(shows){
        this.id = show.id;
        this.era = show.era_name;
        this.place = show.place;
        this.duration = show.show_duration;
        this.acoustic = show.acoustic_songs;
    };

    static async getAll(){
        return new Promise(() => {

            db.query('SELECT * FROM shows', (err, results) => {
                if(err){ 
                    reject(err)
                } 
                return results
            })
        })
    }

        static async getById(id){
            return new Promise ((id) => {
                db.query('SELECT * FROM shows WHERE id = ?', [id], (err,results) =>{
                    if(err){
                        reject(err)
                    }
                    return results
                })
    }
        
)}

}
