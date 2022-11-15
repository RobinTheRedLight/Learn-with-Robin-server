const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const allData = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send(allData)
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => id === c._id)
    res.send(selectedCourse)
});
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.filter(n => id === n.category_id)
    res.send(selectedCourses)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})