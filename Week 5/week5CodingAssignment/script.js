class Heroes {   //This holds all 16 hero names in an array heroNames, with the first (or 0th?) index nulled so as to be able to list them in a string dynamically by using the index number starting at index 1, running to 16 using the heroesList() method
    constructor() {
        this.heroNames = [
              null,
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
    heroesList() { //This method initializes an empty string called list, and then loops from i = 1 through the length of the heroNames array to add every hero in order, using the index to add a number before each name.
        let list = '';
        for (let i = 1; i < this.heroNames.length; i++) {
            list += `${i}. ${this.heroNames[i]}\n`; // results in "1. Hero Name" and so forth through all 16 names, each name on it's own line. Users will use the number assigned to each Hero to select them later.
        }
        return list //returns the heroNames array but as a template literal that is a numbered list of all hero Names
    }
}

class Menu extends Heroes { //This is where the bulk of the Menu lives, in it's own class. It inherits the Heroes class and borrows the properties and methods above with super() in the constructor
    constructor() {
        super();
        this.teams = [[], [], [], []]; //I want the user to manually split the 16 heroes into 4 teams of 4 heroes each, so I created this array to nest 4 arrays to represent each team.

    }
    start() { //This lets the user open the main menu and choose from createTeam, resetTeams and displayTeams using a switch statement
        let selection = this.showMainMenuOptions(); //invokes the main menu
        while (selection != 0) { //the menu uses a switch statement inside of a while loop to determine the user's choice.
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;            
                case '2':
                    this.resetTeams();
                    break;
                case '3':
                    this.displayTeams();
                    break;
                default:
                    selection = 0; 
                
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!'); //if you select 0, the while loop ends and you leave the menu
    }

    // MAIN MENU
    showMainMenuOptions() { //this functions invokes the Main Menu the user sees and advises them on what they must do as well as displays their numbered options that relate to the switch statement from start()
        return prompt(`You are almost ready to board the Arseille and face the final trials that await at Castle Phantasmagoria.
You will be unable to use the Recluse Cube to return to the garden after departure.
All 16 Heroes must be split into four Attack Teams of four Heroes each in order to breach the castle.
Please form the compositions of the four Attack Teams now.

        1) Create Teams
        2) Reset Teams
        3) Display All Teams
        `)
    }

    //TEAM DISPLAY MENU (option 3)
    displayTeams() {  //this method initializes the empty string teamString, and then loops through the teams array and adds "Team [i+1]: w, x, y, z".
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += `Team ${i + 1}: ${this.teams[i].join(', ')}\n`; //This displays all four teams on a new line. Why four teams? Because the length of the teams array is 4. They are numbered using the string interpolation ${i + 1}.
        }                                                                 //The Heroes in each nested array are accessed using this.teams[1] and then joined as strings using the .join(', ') method to put commas and spaces between the hero names.
        alert(teamString); //returns the four teams in separate lines, with each hero having a comma and space in between thanks to the .join() method
    }

    //TEAM CREATION MENU (option 1) This took me 10 hours to figure out :) 
    createAttackTeam(teamIndex) { //this method takes the parameter "teamIndex" which will refer to one of the four teams
        const teamMembersLimit = 4; //For loop purposes, so user cannot enter more than four Heroes into a team
        for (let i = 0; i < teamMembersLimit; i++) { //with i < teamMembersLimit, this will only loop four times, once for each Hero to be added
            const ordinalIndicator = i === 0 ? 'first' : i === 1 ? 'second' : i === 2 ? 'third' : 'fourth'; //I learned about the ternary operator ? which can replace lengthy if... else if... statements. It uses the current index to produce a string from 'first' to 'fourth' to be accurate for the prompt it's going into below.
            let userDraftedHero = prompt(`From their indices, choose the four Heroes that will make up Attack Team ${teamIndex + 1}. Please do not duplicate Heroes across Attack Teams. Choose the ${ordinalIndicator} Hero to join Attack Team ${teamIndex + 1}.

${this.heroesList()}`); //This template literal gives the user instructions on how to choose heroes, how many they can choose per team, and accurately displays what Attack Team they're building at that instance, and what place in the pick order (first, second, etc.) they are in. It then lists all the heroes with their assigned number.
            this.teams[teamIndex].push(this.heroNames[userDraftedHero]); //the User input in the above prompt gets stored into userDraftedHero. The correct team (nested array from the teams array) to be pushed to is selected through the [teamIndex] and the correct user's input is passed as the index to be pushed from the heroNames array.
        }
    } //Where is the teamIndex being defined?? Below! Because the above method is passed into the below method's for loop
        createTeam() {
            for (let i = 0; i < this.teams.length; i++) { //While the createAttackTeams method is in charge of filling an individual team with four Heroes, the createTeam method is in charge of making sure that happens four times to create four teams.
                this.createAttackTeam(i);
            }
            return this.teams;
    }
    
    //RESET ALL TEAMS TO THEIR EMPTY NESTED ARRAYS
    resetTeams() {
        let teamReset = prompt(`This will undo all currently created teams, are you sure?
        1) Yes
        2) No
        `)

        switch (teamReset) {
            case '1':
                for (let i = 0; i < this.teams.length; i++)
                    this.teams[i].splice(0, 4)
            break;
            default: this.start(); 
            }          
        }
    
}
//Main Menu Prompt Initialization
let mainMenu = new Menu();
mainMenu.start();

