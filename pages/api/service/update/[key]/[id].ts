export const Esatabelecimento =  require('../../../../../models/estabelecimentosschema')
import { NextApiRequest, NextApiResponse } from "next";

export default async function update(req: any, res: NextApiResponse) :Promise<void> {
    const {
        query: { id, key }
    } = req;

    if(key === process.env.DEVELOPER_KEY) {
        try {
            const EstabelecimentoUpdate = await Esatabelecimento.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });
    
            if(!EstabelecimentoUpdate) {
                return res.end(JSON.stringify({ status: false, msg: "Estabelecimento nao existe" }))
            }
    
            res.end(JSON.stringify({ status: false, msg: EstabelecimentoUpdate }))
    
        } catch(err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
        }
    } else {
        res.end(JSON.stringify({ status: false, msg: "Chave de acesso não existe" }))
    }

    
} 
