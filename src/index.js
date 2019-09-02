import Analytics from './analytics'

const analytics = new Analytics('https://raw.githubusercontent.com/OVNICap/JavaScriptTest/master/test/history-api-mock.json')

async function run() {
    console.log(
        await analytics.getHistory()
    )
}

run()
