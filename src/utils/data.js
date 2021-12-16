const meta = {
	courseName: 'Dramatisk webbutveckling',
	term: 'HT21',
	school: 'ITHS',
	className: 'FRU20',
	city: 'Göteholm',
	general: `Allmän info, kontaktuppgifter till läraren osv. Huvudlärare för kursen är David Andersson, david.andersson@zocom.se .`
}

const resources = [
	{
		url: 'https://www.zocom.se',
		text: 'A web link'
	},
	{
		url: 'https://www.zocom.se#1',
		text: 'Another web link'
	},
]

const schedule = [
	{
		date: '2021-12-12',
		time: '9-16',
		theme: 'Kursintroduktion',
		materials: [{ url: 'www 3', text: 'prez 1' }]
	},
	{
		date: '2021-12-14',
		time: '9-16',
		theme: 'Fortsatt introduktion',
		materials: [{ url: 'www 3', text: 'prez 1' }]
	},
	{
		date: '2021-12-16',
		time: '9-16',
		theme: 'Express osv.',
		materials: [{ url: 'www 4', text: 'prez 2' }]
	},
	{
		date: '2021-12-17',
		time: '9-16',
		theme: 'React med mindre',
		materials: [{ url: 'www 5', text: 'prez 3' }]
	},
	{
		date: '2021-12-18',
		time: '9-16',
		theme: 'React med mindre',
		materials: [{ url: 'www 5', text: 'prez 4' }]
	},
	{
		date: '2021-12-20',
		time: '9-16',
		theme: 'React med mindre',
		materials: [{ url: 'www 5', text: 'prez 5' }]
	}
]

export { resources, schedule, meta }
