import { NextApiRequest, NextApiResponse } from 'next';

// get: this will handle get method
function get(req: NextApiRequest, res: NextApiResponse) {

}

// post: this will handle post method
function post(req: NextApiRequest, res: NextApiResponse) {

}

// put: this will handle put method
function put(req: NextApiRequest, res: NextApiResponse) {

}

// delete: this will handle delete method
function del(req: NextApiRequest, res: NextApiResponse) {

}

// def: this will handle def method
function def(req: NextApiRequest, res: NextApiResponse) {

}

// mux: redirect the request to the specific method handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            get(req, res);
            break;
        case 'POST':
            post(req, res);
            break;
        case 'PUT':
            put(req, res);
            break;
        case 'DELETE':
            del(req, res);
            break;
        default:
            def(req, res);
            break;
    }
}
