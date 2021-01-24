const EstabelecimentoSchema = require('../../../../../models/estabelecimentosschema')
import { ChaveDeAcessoErrada, Deletetado, IDinexistente, PlataformaEmMalFuncionamento } from '../../../../../messages/Msgs'

export default async function (req, res) {
    const {
        query: { id, key }
    } = req;

    try {
        if(key === process.env.DEVELOPER_KEY) {
            const deleteEstabelecimento = await EstabelecimentoSchema.deleteOne({ _id: id });

            if(!deleteEstabelecimento) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ status: false, msg: IDinexistente }));
            }
            res.statusCode = 200;
            res.end(JSON.stringify({ status: true, msg: Deletetado }))
        } else {
            res.statusCode = 500;
            res.end(JSON.stringify({ status: false, msg: ChaveDeAcessoErrada }))
        }

    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }

}