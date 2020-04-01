import axios from 'axios';

const API_URI : string = 'http://localhost:6969';
const dev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

export default class {
    static buildJsonTree = (expression: string) : Promise<Object> => {
        return new Promise(async(resolve, reject) => {
            await axios.post(`${dev ? API_URI : ''}/api/bt/v3/bjs`, JSON.stringify({ expression }), {
                headers: { 'Content-Type': 'application/json' },
            }).then(resolve).catch(reject);
        })
    }

    static imgToText = (encodedImage: string) : Promise<Object> => {
        return new Promise(async(resolve, reject) => {
            await axios.post(`${dev ? API_URI : ''}/api/base/tfi`, JSON.stringify({ encodedImage }), {
                headers: { 'Content-Type': 'application/json' },
            }).then(resolve).catch(reject);
        })
    }
}