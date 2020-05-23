const errorCode = require('../config/error')
const successCode = require('../config/success')

class Error {
    constructor(res, code, data = undefined) {
        this.res = res
        this.code = code
        this.handler(data)
    }

    handler(data) {
        const {code, msg} = errorCode[this.code];
        this.res.status(code).json({code, msg, data})
    }
}

class Success {
    constructor(res, code, data = undefined) {
        this.res = res;
        this.code = code
        this.handler(data)
    }

    handler(data) {
        const {code, msg} = successCode[this.code]
        this.res.status(200).json({
            code,
            msg,
            data
        })
    }
}

module.exports = {Success, Error}