function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
// 3.1.1 - Takes a player's name and returns their points scored
function numPointsScored(playerName) {
  const game = gameObject();

  // Check home team
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  }

  // Check away team
  if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  }

  return null; // Player not found
}

// 3.1.2 - Takes a player's name and returns their shoe size
function shoeSize(playerName) {
  const game = gameObject();

  // Check home team
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  }

  // Check away team
  if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
  }

  return null; // Player not found
}

// 3.2.1 - Takes a team name and returns an array of the team's colors
function teamColors(teamName) {
  const game = gameObject();

  if (game.home.teamName === teamName) {
    return game.home.colors;
  }

  if (game.away.teamName === teamName) {
    return game.away.colors;
  }

  return null; // Team not found
}

// 3.2.2 - Returns an array of both team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Extra credit questions?

// Determines which player scored the most points
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = null;

  // Check home team players
  for (const playerName in game.home.players) {
    const points = game.home.players[playerName].points;
    if (points > maxPoints) {
      maxPoints = points;
      topPlayer = playerName;
    }
  }

  // Check away team players
  for (const playerName in game.away.players) {
    const points = game.away.players[playerName].points;
    if (points > maxPoints) {
      maxPoints = points;
      topPlayer = playerName;
    }
  }

  return topPlayer;
}

// Identifies which team has the most total points
function winningTeam() {
  const game = gameObject();
  let homeTotal = 0;
  let awayTotal = 0;

  // Calculate home team total
  for (const playerName in game.home.players) {
    homeTotal += game.home.players[playerName].points;
  }

  // Calculate away team total
  for (const playerName in game.away.players) {
    awayTotal += game.away.players[playerName].points;
  }

  return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

// Finds the player with the longest name
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  // Check home team players
  for (const playerName in game.home.players) {
    if (playerName.length > longestName.length) {
      longestName = playerName;
    }
  }

  // Check away team players
  for (const playerName in game.away.players) {
    if (playerName.length > longestName.length) {
      longestName = playerName;
    }
  }

  return longestName;
}

// Returns true if the player with the longest name has the most steals
function doesLongNameStealATon() {
  const game = gameObject();
  const longestNamePlayer = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMostSteals = null;

  // Check home team players
  for (const playerName in game.home.players) {
    const steals = game.home.players[playerName].steals;
    if (steals > maxSteals) {
      maxSteals = steals;
      playerWithMostSteals = playerName;
    }
  }

  // Check away team players
  for (const playerName in game.away.players) {
    const steals = game.away.players[playerName].steals;
    if (steals > maxSteals) {
      maxSteals = steals;
      playerWithMostSteals = playerName;
    }
  }

  return longestNamePlayer === playerWithMostSteals;
}

// Test examples
console.log("=== Testing Functions ===");
console.log("Alan Anderson's points:", numPointsScored("Alan Anderson"));
console.log("Brook Lopez's shoe size:", shoeSize("Brook Lopez"));
console.log("Brooklyn Nets colors:", teamColors("Brooklyn Nets"));
console.log("Charlotte Hornets colors:", teamColors("Charlotte Hornets"));
console.log("All team names:", teamNames());

console.log("\n=== Advanced Functions ===");
console.log("Player with most points:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with longest name:", playerWithLongestName());
console.log("Does long name steal a ton?:", doesLongNameStealATon());
