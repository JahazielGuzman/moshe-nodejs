console.log('Before');
// getUser(1, (user) => {
// 	getRepositories(user.gitHubUsername, (repos) => {
// 		getCommits(repos[0], (commits) => {
// 			console.log(commits);
// 		})
// 	})
// })

// The promise approach

// getUser(1)
// .then(user => getRepositories(user.gitHubUsername))
// .then(repos => getCommits(repos[2]))
// .then(commits => console.log(commits))
// .catch(error => console.log(error.message))

async function displayCommits() {

	const user = await getUser(1);
	const repos = await getRepositories(user.gitHubUsername);
	const commits = await getCommits(repos[2])
	console.log("Here are the commits:", commits);
}

displayCommits();

console.log("after");

function getUser(id) {

	return new Promise((resolve, reject) => {


		setTimeout(() => {

			console.log('Reading a user from a database...');
			resolve({id: id, gitHubUsername: 'mosh'});
		}, 2000);
	});
}

function getRepositories(username) {

	return new Promise((resolve, reject) => {

		const users = {
			"mosh": ['repo1', 'repo2', 'repo3'],
			"john": ['repo4', 'repo5', 'repo6']
		}

		setTimeout(() => {


			console.log(`Calling GitHub API... ${username}`);

			resolve(users[username]);
		}, 2000);
	});
}

function getCommits(repo) {

	return new Promise((resolve, reject) => {

		const repos = {
			'repo1' : ['commit1', 'commit2', 'commit3'],
			'repo2' : ['commit4', 'commit5', 'commit6'],
			'repo3' : ['commit7', 'commit8', 'commit9'],
			'repo4' : ['commit10', 'commit11', 'commit12'],
			'repo5' : ['commit13', 'commit14', 'commit15'],
			'repo6' : ['commit16', 'commit17', 'commit18']
		}

		setTimeout(() => {

			console.log(`Getting users commits... ${repo}`);
			resolve(repos[repo]);
		}, 2000);
	});
}