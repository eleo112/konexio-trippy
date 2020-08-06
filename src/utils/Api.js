import Config from '../Config';

class Api {
    getHome() {
        const url = `${Config.host}/api/home`;
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            return res.results
        });
    }
}

export default new Api();