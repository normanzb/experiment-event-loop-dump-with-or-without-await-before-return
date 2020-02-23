const wtf = require('wtfnode')
const { Response } = require('node-fetch')
const delay = require('delay')
const chalk = require('chalk')

async function withoutAwaitInReturn() {
    console.log(chalk.blue('withoutAwaitInReturn start'))
    await delay(1)
    const res = new Response(`{"a":1, "b": 2}`, {status: '200'})
    return res.json()
}

let promiseWithoutAwait = withoutAwaitInReturn()

console.log('dump after called')
wtf.dump()

promiseWithoutAwait
    .then((result) => {
        console.log('withoutAwait finished with result:', result)
        console.log('dump at finish')
        wtf.dump()
    })