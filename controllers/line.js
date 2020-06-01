const request = require('request')
const moment = require('moment')
const cron = require('node-cron');
const model = require('../model/line');

async function main() {
    try {
        const list_data = await model.list_domain();
        const date_now = moment().format('DD-MM-YYYY');
        list_data.forEach(async list => {
            let message = ''
            let expiry_date = list.expiry_date;
            let name_domain = list.name;
            let date_day = moment(expiry_date).format('DD-MM-YYYY');
            let date_ago = moment(expiry_date).subtract(30, 'day').format('DD-MM-YYYY');
            let date_next = moment(expiry_date).add(30, 'day').format('DD-MM-YYYY');
            if(date_ago == date_now){
                message = '📢 อีก 30 วัน Domain "' + name_domain + '" จะหมดอายุในวันที่ ' + date_day + ' 🚨'
            } else if(date_day == date_now) {
                message = '📢 Domain "' + name_domain + '" ได้หมดอายุลงแล้ว 🚫'
            }
            // console.log(message);
            // cron.schedule('*/1 * * * *', function () { 
                request({
                    method: 'POST',
                    uri: 'https://notify-api.line.me/api/notify',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    auth: {
                        // 'bearer': 'Tg4JfJEdfOZ43ux4tlcgK8b7FmMCKDD0AKk4wOAKVfT'
                        'bearer': 'Token'
                    },
                    form: {
                        message: message
                    }
                }, (err, httpResponse, body) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(body)
                    }
                }) 
            // });
		});
    } catch (err) {
        console.error(err)
    }
}

main();