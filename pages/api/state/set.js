import db from '../../../src/API/DataStore';


export default async (req, res) => {
    let category = req.query.category;
    if(typeof category !== 'string') {
        res.status(400).json({err: "category invalid!"});
        return;
    }

    let id = req.query.id;
    if(id === undefined) {
        res.status(400).json({err: "id invalid!"});
        return;
    }

    let data = req.query.data;
    if(data === undefined) {
        res.status(400).json({err: "data invalid!"});
        return;
    }


    db.push("/" + category + "/" + id + "/", data);
    res.status(200).json({status: "ok"});
}