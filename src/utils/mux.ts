import { Comment } from '@/types/comment';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Mux {
    // get: this will handle get method
    get?: (req: NextApiRequest, res: NextApiResponse) => void;

    // post: this will handle post method
    post?: (req: NextApiRequest, res: NextApiResponse) => void;

    // put: this will handle put method
    put?: (req: NextApiRequest, res: NextApiResponse) => void;

    // delete: this will handle delete method
    del?: (req: NextApiRequest, res: NextApiResponse) => void;

    // def: this will handle def method
    def?: (req: NextApiRequest, res: NextApiResponse) => void;
}

export function muxHandler(req: NextApiRequest, res: NextApiResponse, { get, post, put, del, def }: Mux) {
    switch (req.method) {
        case 'GET':
            get && get(req, res);
            break;
        case 'POST':
            post && post(req, res);
            break;
        case 'PUT':
            put && put(req, res);
            break;
        case 'DELETE':
            del && del(req, res);
            break;
        default:
            def && def(req, res);
            break;
    }
}

export class MuxHandler {
    // mux: redirect the request to the specific method handler
    handler(req: NextApiRequest, res: NextApiResponse, { get, post, put, del, def }: Mux) {
        switch (req.method) {
            case 'GET':
                get && get(req, res);
                break;
            case 'POST':
                post && post(req, res);
                break;
            case 'PUT':
                put && put(req, res);
                break;
            case 'DELETE':
                del && del(req, res);
                break;
            default:
                def && def(req, res);
                break;
        }
    }
}

