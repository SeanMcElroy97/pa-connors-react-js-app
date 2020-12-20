
const players = [
    {
        id: 1,
        fullName: "Sean McElroy",
        nickNames: ["Seanymc", "Rocco"],
        golfingAbility: 40,
        drinkingAbility: 60,
        pokerAbility: 80
    },
    {
        id: 2,
        fullName: "Darragh Slater",
        nickNames: ["ACSlater", "Cheddar"],
        golfingAbility: 30,
        drinkingAbility: 99,
        pokerAbility: 69
    },
    {
        id: 3,
        fullName: "Conor Keegan",
        nickNames: ["Keegan", "CodeineKing"],
        golfingAbility: 80,
        drinkingAbility: 40,
        pokerAbility: 75
    },
    {
        id: 4,
        fullName: "Conor Geoghegan",
        nickNames: ["Gaigo"],
        golfingAbility: 55,
        drinkingAbility: 70,
        pokerAbility: 95
    },
    {
        id: 5,
        fullName: "Conor Hughes",
        nickNames: ["Bean", "Fudge", "YogiBear"],
        golfingAbility: 70,
        drinkingAbility: 89,
        pokerAbility: 70
    },
    {
        id: 6,
        fullName: "Eoin Reynolds",
        nickNames: ["Reynolds", "McReyn"],
        golfingAbility: 70,
        drinkingAbility: 0,
        pokerAbility: 21
    },
    {
        id: 7,
        fullName: "Graham O'Connor",
        nickNames: ["G", "Grambo"],
        golfingAbility: 75,
        drinkingAbility: 70,
        pokerAbility: 40
    },
]

export function getPlayers() {
    return players;
  }
  
  export function getPlayer(id) {
    return players.find(p => p.id === id);
  }

  export function getPlayerOverallRating(id){
      const player = players.find(p => p.id === id);
      let overallScore=(player.drinkingAbility+player.golfingAbility + player.pokerAbility)/3;
      return Math.ceil(overallScore);
    }