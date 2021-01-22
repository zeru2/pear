import { NextApiRequest, NextApiResponse } from "next";
import { Esatabelecimento } from '../register/[key]'

export default async function Show(req, res) {
    try {
        const EstabelecimentoResponse = await Esatabelecimento.find({});
        res.end(JSON.stringify({ status: true, msg: EstabelecimentoResponse }))
    } catch(err) {
        res.end(JSON.stringify({ status: false, msg: "Plataforma em mal funcionamento" }))
    }
}