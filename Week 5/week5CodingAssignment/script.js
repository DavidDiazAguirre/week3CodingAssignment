class Heroes {
    constructor() {
        this.heroNames = [
             
             'Kevin Graham',
             'Ries Argent',
             'Estelle Bright',
             'Joshua Bright',
             'Schera Harvey',
             'Agate Crosner',
             'Tita Russell',
             'Zin Vathek',
             'Anelace Elfead',
             'Klaudia von Auslese',
             'Olivier Lenheim',
             'Julia Schwarz',
             'Mueller Vander',
             'Josette Capua',
             'Alan Richard',
             'Renne'
        ]
    }
    heroesList() {
        return `
1. Kevin Graham
2. Ries Argent
3. Estelle Bright
4. Joshua Cright
5. Schera Harvey
6. Agate Crosner
7. Tita Russel
8. Zin Vathek
9. Anelace Elfead
10. Klaudia von Auslese
11. Olivier Lenheim
12. Julia Schwarz
13. Mueller Vander
14. Josette Capua
15. Alan Richard
16. Renne`
    }
}


/*
class AttackTeam {
    constructor(name) {
        this.name = name;
        //this.teams = [];
        this.teamMembers = [];
    }
    addTeamMember(hero) {
        if(hero instanceof Heroes) {
            this.teamMembers.push(hero);
        } else {
            throw new Error('You can only add a listed Hero to your team. Please add up to four unique heroes from the list.');
        }
    }
    describe() {
        return `This team contains ${this.teamMembers[0]}, ${this.teamMembers[1]}, ${this.teamMembers[2]}, and ${this.teamMembers[3]}.`
    }
}
*/

class Menu extends Heroes {
    constructor() {
        super();
        this.teams = [[], [], [], []]; //might need to make it take arrays and not strings?
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;            
                case '2':
                    this.deleteTeam();
                    break;
                case '3':
                    this.displayTeams();
                    break;
                default:
                    selection = 0; 
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`You are almost ready to board the Arseille and face the final trials that await at Castle Phantasmagoria.
You will be unable to use the Recluse Cube to return to the garden after departure.
All 16 Heroes must be split into four Attack Teams of four Heroes each in order to breach the castle.
Please form the compositions of the four Attack Teams now.

        1) Create Teams
        2) Reset Teams
        3) Display All Teams
        `)
    }
    displayTeams() {
        let teamString = '';
        for (let team of this.teams) {
            teamString += team + ') ' + this.teams[team].name + '\n';
        }
        alert(teamString);
    }
    createTeam() {
        let teamLimit = 4;
        for (let i = 0; i < teamLimit; i++) {
        prompt(`From their indices, choose the four Heroes that will make up Attack Team ${i}. Please do not duplicate Heroes across Attack Teams.
${this.heroesList()}
        `);
        this.teams[i].push(this.heroNames[i]);
        }
    }

}
//Main Menu Prompt Initialization
let mainMenu = new Menu();
mainMenu.showMainMenuOptions();
//Initialize option 1 - Create Team
mainMenu.createTeam();
console.log(this.teams);