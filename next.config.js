// import * as withPWA from 'next-pwa'
const withPWA = require('next-pwa')
module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        // disable: process.env.NODE_ENV === 'development'
        disable: false
    }
})