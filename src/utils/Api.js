import Config from '../Config';

class Api {
    getHome() {
        const url = `${Config.host}/api/home`;
        return fetch(url, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            console.log('json', json);
            return json.results
        });
    }
}

export default new Api();