const Joi = require('joi');
const express = require('express');
const logger = require('./logger');
const coursesRouter = require('./routes/courses');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/api/courses', coursesRouter);

app.use(logger);

app.use(function(req, res, next) {

	console.log('Authenticating...');
	next();
});


const courses = [
	{id: 1, name: 'course1'},
	{id: 2, name: 'course2'},
	{id: 3, name: 'course3'}
];

app.get('/', (req, res) => {

	res.send('hello world');
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));