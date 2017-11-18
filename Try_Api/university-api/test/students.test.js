const test = require('tape')
const app = require('../server')
const request = require('supertest')

test('First Test case', (t) => {
    t.equal(1,1)
    t.end()
})

test('GET /students', (t) =>{
    request(app).get('/students')
     .expect(200)
     .then((res) =>{
         let students = res.body
         t.equal(2, students.length)
         let student = students[0]
         t.notEqual(undefined, student.id)
         t.end()
     })
     
})
