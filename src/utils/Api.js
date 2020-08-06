import Config from "../Config";
const { host } = Config;

class Api {
    getHome() {
        const url = `${host}/api/home`;
        return fetch(url)
            .then(res => res.json())
            .then(res => ({ cities: res.cities }))
    }
}

export default new Api();