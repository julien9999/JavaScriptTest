import axios from 'axios';

/**
 * @property {string|{history: object[]}} source
 */
export default class Analytics {
    constructor(source) {
        this.source = source
    }

    /**
     * Get events history.
     *
     * @returns {Promise<{history: object[]}>}
     */
    async getHistory() {
        if(typeof this.source === 'object'){
            return this.source;
        }

        return axios.get(this.source).then(response => response.data)
        .catch(function (response) {
            console.log(response);
        });
    }


    /**
     * Get total amount of all validated purchases.
     *
     * @returns {Promise<number>}
     */
    async getTotalPurchasesAmount() {
        const history = await this.getHistory()
        .then(json => json.history);

        const sumInCents = history
        .filter(element => element.action === "buy" && element.details.validated)
        .reduce((sum, { details: { amount } }) => sum + amount , 0);
 
        return sumInCents / 100;
    }

    /**
     * Get list of clients who did at least 1 validated purchase.
     *
     * @returns {Promise<string[]>}
     */
    async getClients() {
        const history = await this.getHistory()
        .then(json => json.history);

        const filter = history
        .filter(element => element.action === "buy" && element.details.validated)
        .map(element => element.user)
        .filter((element, index, self) => self.indexOf(element) === index)
        .reverse()

        return filter;
    }
}
