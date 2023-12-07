export const data = JSON.parse(`{
	"users": [
		{
			"id": 1,
			"name": "Donald Duck",
			"image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fa%2Fa5%2FDonald_Duck_angry_transparent_background.png&tbnid=8j1JI9Qi6suE9M&vet=12ahUKEwi35qyX38qBAxUvgf0HHdUdDVMQMygCegQIARBU..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDonald_Duck&docid=5YW2q776-BkUzM&w=270&h=351&q=donald%20duck&ved=2ahUKEwi35qyX38qBAxUvgf0HHdUdDVMQMygCegQIARBU"
		},
		{
			"id": 2,
			"name": "Kwik Duck",
			"image": "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.animaatjes.nl%2Fdisney-plaatjes%2Fdisney-plaatjes%2Fkwik-kwek-en-kwak%2Fkkk07.gif&tbnid=e0CvEcYMpR62QM&vet=12ahUKEwjaib2R4sqBAxXuhP0HHRdZBpAQMygZegUIARCJAQ..i&imgrefurl=https%3A%2F%2Fwww.animaatjes.nl%2Fdisney-plaatjes%2Fkwik-kwek-en-kwak&docid=HZ4kNy4Dni-IhM&w=262&h=200&q=kwik%20duck&ved=2ahUKEwjaib2R4sqBAxXuhP0HHRdZBpAQMygZegUIARCJAQ"
		}
	],
	"events": [
		{
			"id": 1,
			"createdBy": 1,
			"title": "Coin Polishing",
			"description": "Make them nice and shiny again!",
			"image": "https://scontent-ams4-1.xx.fbcdn.net/v/t1.18169-9/22221774_1683476748343566_4741694055358618893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c2f564&_nc_ohc=ENNup__u-kYAX-qIbo2&_nc_ht=scontent-ams4-1.xx&oh=00_AfBi_Idk1v5itTJN6ek2vywlKH-lVgm-8_0WZRpddI5UWg&oe=65993CF5",
			"categoryIds": [1],
			"location": "At the money warehouse of my uncle",
			"startTime": "2023-03-10T09:00",
			"endTime": "2023-03-10T17:00:00.000Z"
		},
		{
			"id": 2,
			"createdBy": 2,
			"title": "Skateboarding",
			"description": "Nobody can beat me!",
			"categoryIds": [3],
			"location": "At the skatepark!",
			"startTime": "2023-03-10T11:00",
			"endTime": "2023-03-10T14:00:00.000Z"
		}
	],
	"categories": [
		{
			"name": "helping",
			"id": 1
		},
		{
			"name": "relaxation",
			"id": 2
		},
		{
			"name": "sports",
			"id": 3
		},
		{
			"name": "games",
			"id": 4
		}
	]
}`);
