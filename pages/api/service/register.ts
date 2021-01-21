import { NextApiRequest, NextApiResponse } from "next";
const Esatabelecimento =  require('../../../models/Estabelecimentos')

export default async function register(req: NextApiRequest, res: NextApiResponse) :Promise<void> {
    try {
        res.statusCode = 200;
        
        const newEstabelecimento = await Esatabelecimento.create(req.body)
        res.end(JSON.stringify({ newEstabelecimento }))

    } catch(errormessage) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }
}


// res.end(JSON.stringify({ status: true, msg: "Plataforma funcionando" }))