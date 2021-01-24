const EstabelecimentoSchema = require('../../../../../models/estabelecimentosschema')
import { ChaveDeAcessoErrada, PlataformaEmMalFuncionamento } from '../../../../messages/Msgs'

export default async function Show(req, res) {
    const {
        query: { key }
    } = req;

    try{
        if(key === process.env.DEVELOPER_KEY) {
            const EstabelecimentoResponse = await EstabelecimentoSchema.find({});
            res.end(JSON.stringify({ status: true, msg: EstabelecimentoResponse }))
        } else {
            res.end(JSON.stringify({ status: false, msg: ChaveDeAcessoErrada }))
        }
    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }

    
}