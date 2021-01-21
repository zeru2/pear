import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try {
        res.statusCode = 200;
        res.end(JSON.stringify({ status: true, msg: "Plataforma funcionando" }))
    } catch(errormessage) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }
}