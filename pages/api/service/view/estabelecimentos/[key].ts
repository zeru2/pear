import { Esatabelecimento } from '../../register/[key]'

export default async function Show(req, res) {
    const {
        query: { key }
    } = req;

    try{
        if(key === process.env.DEVELOPER_KEY) {
            const EstabelecimentoResponse = await Esatabelecimento.find({});
            res.end(JSON.stringify({ status: true, msg: EstabelecimentoResponse }))
        } else {
            res.end(JSON.stringify({ status: false, msg: "Chave de acesso nao existe" }))
        }
    } catch(err) {
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }

    
}