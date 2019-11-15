const request = require('supertest')

const server = require('./server')

describe('server', () => {
    describe('GET', () => {
        it('Should return a 400', () => {
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
        })

        it('Should return a json response', () => {
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })

    describe('POST', () => {
        it('Should return a 404', () => {
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })

        it('Should return text/html', () => {
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })
        })
    })
})
