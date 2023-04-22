import db from '../../src/API/DataStore';


export default async (req, res) => {
    let name = req.query.name;
    if(typeof name !== 'string' || name.length < 2 || name.length > 32) {
        res.status(400).json({err: "name invalid!"});
        return;
    }

    let number = req.query.number;
    if(number === undefined) {
        res.status(400).json({err: "number invalid!"});
        return;
    }

    let data = {
        name: name,
        number: number
    };
    db.push("/applications[]", data, true);
    res.status(200).json({status: "ok"});
}