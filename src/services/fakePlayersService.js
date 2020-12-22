
const players = [
    {
        id: 1,
        fullName: "Sean McElroy",
        nickNames: ["Seanymc", "Rocco"],
        golfingAbility: 40,
        drinkingAbility: 60,
        pokerAbility: 80,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_sean.jpg?alt=media&token=2eac1ba0-c41d-47f4-b375-26b6d0c216f6'
    },
    {
        id: 2,
        fullName: "Darragh Slater",
        nickNames: ["ACSlater", "Cheddar"],
        golfingAbility: 30,
        drinkingAbility: 99,
        pokerAbility: 69,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_darragh.PNG?alt=media&token=ef2bc4a4-06ab-4972-925e-0e07fa7b5ae7'
    },
    {
        id: 3,
        fullName: "Conor Keegan",
        nickNames: ["Keegan", "CodeineKing"],
        golfingAbility: 80,
        drinkingAbility: 40,
        pokerAbility: 75,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_keegan.PNG?alt=media&token=82fb3eaf-df60-4107-a2a1-6c2bf09fc99a'
    },
    {
        id: 4,
        fullName: "Conor Geoghegan",
        nickNames: ["Gaigo"],
        golfingAbility: 55,
        drinkingAbility: 70,
        pokerAbility: 95,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_gaigo.PNG?alt=media&token=55b31854-ea15-482b-b33e-26e7e4697735'
    },
    {
        id: 5,
        fullName: "Conor Hughes",
        nickNames: ["Bean", "Fudge", "YogiBear"],
        golfingAbility: 70,
        drinkingAbility: 89,
        pokerAbility: 70,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_bean.PNG?alt=media&token=576e2c18-a8ac-4e1c-9978-cff3acbf9e31'
    },
    {
        id: 6,
        fullName: "Eoin Reynolds",
        nickNames: ["Reynolds", "McReyn"],
        golfingAbility: 70,
        drinkingAbility: 0,
        pokerAbility: 21,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_reynolds.jpg?alt=media&token=aafd0e15-28ce-477b-b45e-f0ca115b864e'
    },
    {
        id: 7,
        fullName: "Graham O'Connor",
        nickNames: ["G", "Grambo"],
        golfingAbility: 75,
        drinkingAbility: 70,
        pokerAbility: 40,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_graham.PNG?alt=media&token=376b6680-607f-42e6-85ed-4a243f1fe823'
    },
    {
        id: 8,
        fullName: "Craig Kavanagh",
        nickNames: ["Chip", "Chipper"],
        golfingAbility: 30,
        drinkingAbility: 85,
        pokerAbility: 75,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_chip.PNG?alt=media&token=fec0615b-e77c-489a-ba31-a9faafdfb964'
    },
    {
        id: 9,
        fullName: "Trevor Curtin",
        nickNames: ["Trev", "Trevahhh"],
        golfingAbility: 90,
        drinkingAbility: 80,
        pokerAbility: 55,
        imgsource: 'https://firebasestorage.googleapis.com/v0/b/paconnorsgfc.appspot.com/o/pac_trevor.PNG?alt=media&token=5bac13e8-cd97-4df1-a62c-5212c2388569'
    }
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