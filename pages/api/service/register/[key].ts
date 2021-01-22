import { NextApiRequest, NextApiResponse } from "next";
export const Esatabelecimento =  require('../../../../models/estabelecimentosschema')


export default async function register(req: any, res: NextApiResponse) :Promise<void> {

    const {
        query: { key }
    } = req;

    if(key === process.env.DEVELOPER_KEY) {
        try {
            res.statusCode = 200;
            
            const newEstabelecimento = await Esatabelecimento.create(req.body)
            res.end(JSON.stringify({ newEstabelecimento }))
    
        } catch(errormessage) {
            res.statusCode = 500;
            res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
        }

        
    } else {
        res.end(JSON.stringify({ status: false, msg: "Chave de acesso não existe" }))
    }
}


// res.end(JSON.stringify({ status: true, msg: "Plataforma funcionando" }))
// process.env.DEVELOPER_KEY === "KEY"