const EstabelecimentoSchema = require('../../../../../models/estabelecimentosschema')
import { IDinexistente, ChaveDeAcessoErrada, PlataformaEmMalFuncionamento } from '../../../../../messages/Msgs'

export default async function(req, res) {
    const {
        query: { id, key }
    } = req;

    try {
        if(key === process.env.DEVELOPER_KEY) {
            const estabelecimeto = await EstabelecimentoSchema.findById(id);

            if(!estabelecimeto) {
                return res.end(JSON.stringify({ status: false, msg: IDinexistente }))
            };

            res.end(JSON.stringify({ status: true, msg: estabelecimeto }))


        } else {
            res.end(JSON.stringify({ status: false, msg: ChaveDeAcessoErrada }))
        }
    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }
}