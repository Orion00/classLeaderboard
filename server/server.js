// Fixtures
Meteor.startup(function() {
	if (People.find().count() === 0) {
		var p = [
			{name: "Brent"},
			{name: "Josh"},
			{name: "Victor"},
			{name: "Captain Kirk"}
		];

		for (var i = p.length - 1; i >= 0; i--) {
			People.insert(p[i]);
		};
	}
});