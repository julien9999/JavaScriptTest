import { expect } from 'chai'
import 'deep-eql'
import Analytics from '../src/analytics'
import historyMock from'./history-api-mock.json'

describe('Analytics', () => {
    describe('.getHistory()', () => {
        it('should be able to get history from a URL', async () => {
            const analytics = new Analytics('https://raw.githubusercontent.com/OVNICap/JavaScriptTest/master/test/history-api-mock.json')
            const history = await analytics.getHistory()

            expect(history).eql(historyMock)
        })

        it('should be able to get history from an object', async () => {
            const analytics = new Analytics(historyMock)
            const history = await analytics.getHistory()

            expect(history).eql(historyMock)
        })
    })

    describe('.getTotalPurchasesAmount()', () => {
        it('should be able to get total amount of buy actions (validated only)', async () => {
            const analytics = new Analytics(historyMock)
            const clients = await analytics.getTotalPurchasesAmount()

            expect(clients).equal(58.2)
        })
    })

    describe('.getClients()', () => {
        it('should be able to get list of clients (persons with at least 1 validated purchase)', async () => {
            const analytics = new Analytics(historyMock)
            const clients = await analytics.getClients()

            expect(clients).eql(['Bob', 'David'])
        })
    })
})