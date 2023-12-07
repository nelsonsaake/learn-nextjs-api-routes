import { deleteComment, findComment } from '@/data/comments';
import { Mux, muxHandler } from '@/utils/mux';
import { NextApiRequest, NextApiResponse } from 'next';


function reqId(req: NextApiRequest) {
    const { id } = req.query
    return parseInt(id as string)
}

function reqComment(req: NextApiRequest) {
    return findComment(reqId(req));
}

function deleteReqComment(req: NextApiRequest) {
    const comment = reqComment(req)
    deleteComment(reqId(req))
    return comment
}

const mux: Mux = {
    get: (req, res) => {
        res.status(200).json(reqComment(req));
    },
    post: (req, res) => {
        res.status(200).json({ method: 'POST', message: 'Handling POST request' });
    },
    put: (req, res) => {
        res.status(200).json({ method: 'PUT', message: 'Handling PUT request' });
    },
    del: (req, res) => {
        res.status(200).json(deleteReqComment(req));
    },
    def: (req, res) => {
        res.status(404).json({ method: 'UNKNOWN', message: 'Handling unknown request' });
    },
};

const handler = (req: NextApiRequest, res: NextApiResponse) => muxHandler(req, res, mux);

export default handler;