import { NextApiRequest, NextApiResponse } from "next";
export const EstabelecimentoSchema =  require('../../../../models/estabelecimentosschema')
import { PlataformaEmMalFuncionamento } from '../../../../messages/Msgs'


export default async function register(req: any, res: NextApiResponse) :Promise<void> {

    const {
        query: { key }
    } = req;

    try {
        if(key === process.env.DEVELOPER_KEY) {
            try {
                res.statusCode = 200;
        
                const newEstabelecimento = await EstabelecimentoSchema.create(req.body)
                res.end(JSON.stringify({ status: true,  msg: newEstabelecimento }))
            } catch(err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
            }
        }
    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }
}