const EstabelecimentoSchema = require('../../../../../models/estabelecimentosschema')

export default async function Show(req, res) {
    const {
        query: { key }
    } = req;

    try{
        if(key === process.env.DEVELOPER_KEY) {
            const EstabelecimentoResponse = await EstabelecimentoSchema.find({});
            res.end(JSON.stringify({ status: true, msg: EstabelecimentoResponse }))
        } else {
            res.end(JSON.stringify({ status: false, msg: "Chave de acesso nao existe" }))
        }
    } catch(err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }

    
}