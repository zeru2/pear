import { NextApiRequest, NextApiResponse } from "next";
import { PlataformaFuncionando, PlataformaEmMalFuncionamento } from '../../messages/Msgs'

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try {
        res.statusCode = 200;
        res.end(JSON.stringify({ status: true, msg: PlataformaFuncionando }))
    } catch(errormessage) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, msg: PlataformaEmMalFuncionamento }))
    }
}