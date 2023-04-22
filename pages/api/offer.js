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

    let budget_min = req.query.budget_min;
    if(budget_min === undefined) {
        res.status(400).json({err: "budget_min invalid!"});
        return;
    }

    let budget_max = req.query.budget_max;
    if(budget_max === undefined) {
        res.status(400).json({err: "budget_max invalid!"});
        return;
    }

    let data = {
        name: name,
        number: number,
        type: type,
        budget_min: budget_min,
        budget_max: budget_max,
    };
    db.push("/commercial_offers[]", data, true);
    res.status(200).json({status: "ok"});
}