import https from 'https'

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
    }

    /**
     * Get total amount of all validated purchases.
     *
     * @returns {Promise<number>}
     */
    async getTotalPurchasesAmount() {
    }

    /**
     * Get list of clients who did at least 1 validated purchase.
     *
     * @returns {Promise<string[]>}
     */
    async getClients() {
    }
}
