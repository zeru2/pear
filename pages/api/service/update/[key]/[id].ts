export const EsatabelecimentoSchema =  require('../../../../../models/estabelecimentosschema')
import { NextApiRequest, NextApiResponse } from "next";
import { IDinexistente, PlataformaEmMalFuncionamento, ChaveDeAcessoErrada } from '../../../../../messages/Msgs'

export default async function update(req: any, res: NextApiResponse) :Promise<void> {
    const {
        query: { id, key }
    } = req;

    try {
        if(key === process.env.DEVELOPER_KEY) {
            try {
                const EstabelecimentoUpdate = await EsatabelecimentoSchema.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if(!EstabelecimentoUpdate) {
                    return res.end(JSON.stringify({ status: false, msg: IDinexistente }))
                }
                res.end(JSON.stringify({ status: true, msg: EstabelecimentoUpdate }))

            } catch(err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
            }
        } else {
            res.end(JSON.stringify({ status: false, msg: ChaveDeAcessoErrada }))
        }


    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }

    
} 
