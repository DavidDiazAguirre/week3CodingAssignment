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
    /*
    heroesList() { //not sure what to do with this yet or if I even need it
        return this.heroNames;
    */
    }
//}


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


class Menu extends Heroes {
    constructor() {
        super(heroNames);
        this.teams = ['', '', '', ''];
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

        1) Create New Team
        2) Delete Team
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
        for (let i = 1; i <= teamLimit; i++) {
        let draftedHeroes = prompt(`From their indices, choose the four Heroes that will make up Attack Team ${i}. Please do not duplicate Heroes across Attack Teams.
${this.heroNames}
        `);
        this.teams[i].push(new AttackTeam(name));
        }
    }

}
//Main Menu Prompt Initialization
let mainMenu = new Menu()
mainMenu.showMainMenuOptions();
//Initialize option 1 - Create Team
mainMenu.createTeam();
console.log(this.teams);