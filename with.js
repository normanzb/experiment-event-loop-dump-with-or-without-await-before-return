const wtf = require('wtfnode')
const { Response } = require('node-fetch')
const delay = require('delay')
const chalk = require('chalk')

async function withAwaitInReturn() {
    console.log(chalk.blue('withAwaitInReturn start'))
    await delay(1)
    const res = new Response(`{"a":1, "b": 2}`, {status: '200'})
    return await res.json()
}

let promiseWithAwait = withAwaitInReturn()

console.log('dump after called')
wtf.dump()

promiseWithAwait
    .then((result) => {
        console.log('withAwait finished with result:', result)
        console.log('dump at finish')
        wtf.dump()
    })
