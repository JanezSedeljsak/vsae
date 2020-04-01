import axios from 'axios';

const API_URI : string = 'http://localhost:6969';

export default class {
    static buildJsonTree = (expression: string, isProd: boolean = false) : Promise<Object> => {
        return new Promise(async(resolve, reject) => {
            await axios.post(`${!isProd ? API_URI : ''}/api/bt/v3/bjs`, JSON.stringify({ expression }), {
                headers: { 'Content-Type': 'application/json' },
            }).then(resolve).catch(reject);
        })
    }

    static imgToText = (encodedImage: string, isProd: boolean = false) : Promise<Object> => {
        return new Promise(async(resolve, reject) => {
            await axios.post(`${!isProd ? API_URI : ''}/api/base/tfi`, JSON.stringify({ encodedImage }), {
                headers: { 'Content-Type': 'application/json' },
            }).then(resolve).catch(reject);
        })
    }
}