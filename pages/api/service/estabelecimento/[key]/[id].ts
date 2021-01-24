const EstabelecimentoSchema = require('../../../../../models/estabelecimentosschema')

export default async function(req, res) {
    const {
        query: { id, key }
    } = req;

    try {
        if(key === process.env.DEVELOPER_KEY) {
            const estabelecimeto = await EstabelecimentoSchema.findById(id);

            if(!estabelecimeto) {
                return res.end(JSON.stringify({ status: false, msg: "Estabelecimento nao existe" }))
            };

            res.end(JSON.stringify({ status: true, msg: estabelecimeto }))


        } else {
            res.end(JSON.stringify({ status: false, msg: "Chave de acesso não existe" }))
        }
    } catch(err) {
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }
}