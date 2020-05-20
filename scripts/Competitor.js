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
		"Gold": 25,
		"Silver": 26,
		"Bronze": 59,
		"Wins": [
			"SEGA Classics",
			"NES Classics"
		]
	},

	{
		"Name": "Michael AL Fox",
		"Handle": "MALF",
		"Gold": 56,
		"Silver": 33,
		"Bronze": 21,
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
		"Gold": 36,
		"Silver": 47,
		"Bronze": 27,
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

