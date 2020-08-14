import Config from '../Config';

class Api {

    // constructor(props) {
    //     super(props);

    //     this.getHome = this.getHome.bind(this);
    // }
    getHome = () => {
        const url = `${Config.host}/api/home`;
         fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                return json
            });
    }
}

export default new Api();