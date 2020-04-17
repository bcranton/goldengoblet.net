class Competitor {

	constructor(object) {
		this.name = object.name;
		this.bronze = object.Bronze;
		this.silver = object.Silver;
		this.gold = object.Gold;
		this.score = this.gold * 3 + this.silver * 2 + this.bronze;

		this.wins = object.Wins;
		this.standing;
	}
}

var competitors = [
	{
		"Name": "Dan Gheesling",
		"Handle": "dangheesling",
		"Gold": 17,
		"Silver": 18,
		"Bronze": 42,
		"Wins": [
			"SEGA Classics",
			"NES Classics"
		]
	},

	{
		"Name": "Michael AL Fox",
		"Handle": "MALF",
		"Gold": 35,
		"Silver": 25,
		"Bronze": 17,
		"Wins": [
			"Escape From Tarkov",
			"Hitman 2 (Week 1)",
			"Hitman 2 (Week 2)",
			"Escape Rooms"
		]
	},
	{
		"Name": "Ryan Letourneau",
		"Handle": "Northernlion",
		"Gold": 30,
		"Silver": 31,
		"Bronze": 16,
		"Wins": [
			"Spelunky",
			"Slay the Spire",
			"SNES Classics"
		]
	}


]


var dan = new Competitor(competitors[0]);
var malf = new Competitor(competitors[1]);
var nl = new Competitor(competitors[2]);

const allCompetitors = [dan, malf, nl];
for (c of allCompetitors) {
	if (c.score == Math.max(dan.score, malf.score, nl.score)) {
		c.standing = 1;
	} else if (c.score == Math.min(dan.score, malf.score, nl.score)) {
		c.standing = 3;
	} else {
		c.standing = 2;
	}
}

