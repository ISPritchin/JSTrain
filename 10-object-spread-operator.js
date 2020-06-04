const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}

const opts = {
    user: 'john',
    password: 'pass'
}
// ECMA2015
const shallowCopy = Object.assign({}, defaults, opts)
// ECMA 2018
const res = {...defaults, ...opts}

console.log(res)

const port = 8080;
const res2 = {
    ...defaults,
    ...opts,
    port,

    connect() {
        console.log(`connect to ${this.host}:${this.port}`)
    }
}
res2.connect()
