const express = require('express');
const router = express.Router();

const courses = [
	{id: 1, name: 'course1'},
	{id: 2, name: 'course2'},
	{id: 3, name: 'course3'}
];

router.get('/', (req, res) => {

	res.send(courses);
});

router.get('/:id', (req, res) => {

	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		res.status(404).send('the course with the given id was not found');
	else
		res.send(course);

});

router.post('/', (req, res) => {

	const { error } = validateCourse(req.body);

	if (error) {
		// 400 Bad Request
		res.status(400).send(error);
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	}

	courses.push(course);

	res.send(course);
});

router.put('/:id', (req, res) => {

	const course = courses.find(c => c.id === parseInt(req.params.id));

	if (!course) return res.status(404).send('the course with the given id was not found');

	// validate
	// if invalid, return 400 - bad request

	const { error } = validateCourse(req.body);

	if (error) return res.status(400).send(error);


	// Update course
	// Return the updated course to the client
	course.name = req.body.name;
	res.send(course);
});

router.delete('/:id', (req, res) => {

	const course = courses.find(c => c.id === parseInt(req.params.id));

	if (!course) return res.status(404).send('the course with the given id was not found');
	else {
		const indie = courses.indexOf(course);
		courses.splice(indie, 1);
		return res.status(200).send(course);
	}
});

function validateCourse(course) {

	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(course, schema);
}

module.exports = router;