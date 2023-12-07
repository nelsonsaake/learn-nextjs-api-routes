import { Mux, muxHandler } from '@/utils/mux';
import { NextApiRequest, NextApiResponse } from 'next';

const mux: Mux = {
    get: (req, res) => {
        res.status(200).json({ method: 'GET', message: 'Handling GET request' });
    },
    post: (req, res) => {
        res.status(200).json({ method: 'POST', message: 'Handling POST request' });
    },
    put: (req, res) => {
        res.status(200).json({ method: 'PUT', message: 'Handling PUT request' });
    },
    del: (req, res) => {
        res.status(200).json({ method: 'DELETE', message: 'Handling DELETE request' });
    },
    def: (req, res) => {
        res.status(404).json({ method: 'UNKNOWN', message: 'Handling unknown request' });
    },
};

const handler = (req: NextApiRequest, res: NextApiResponse) => muxHandler(req, res, mux);

export default handler;