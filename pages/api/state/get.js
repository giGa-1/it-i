import db from '../../../src/API/DataStore';

export default async (req, res) => {
    let category = req.query.category;
    if(category === undefined) {
        res.status(400).json({err: "invalid category!"});
        return;
    }


    let data = null;
    try {
        let id = req.query.id;
        if(id !== undefined) {
            data =  db.getData("/" + category + "/" + id + "/");
        } else {
            data =  db.getData("/" + category + "/");
        }
    } catch(error) {
        // lol
    };
    res.status(200).json(data);

}