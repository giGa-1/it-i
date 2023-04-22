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

    let type = req.query.type;
    if(type === undefined) {
        res.status(400).json({err: "type invalid!"});
        return;
    }

    let task = req.query.task;
    if(task === undefined) {
        res.status(400).json({err: "task invalid!"});
        return;
    }

    let link = req.query.link; // may be empty
    if(link === undefined) {
        link = "";
    }
    
    let has_text = req.query.has_text;
    if(has_text === undefined) {
        res.status(400).json({err: "has_text invalid!"});
        return;
    }

    let data = {
        name: name,
        number: number,
        type: type,
        task: task,
        link: link,
        has_text: has_text,
    };
    db.push("/detailed_offers[]", data, true);
    res.status(200).json({status: "ok"});
}