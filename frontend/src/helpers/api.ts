import axios from 'axios';

const API_URI : string = '';

export default class {
    static buildJsonTree = (expression: string) : Promise<Object> => {
        return new Promise(async(resolve, reject) => {
            await axios.post(`${API_URI}/api/bjs`, JSON.stringify({ expression }), {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resolve)
                .catch(reject);
        })
    }
}