import fetcher from "./dataRetriver";

export class Team{
    constructor(id, name, wins, losses, matchesPlayed, matchesWon){
        this.id = id;
        this.name = name;
        this.wins = wins;
        this.losses = losses;
        this.matchesPlayed = matchesPlayed;
        this.matchesWon = matchesWon;
    }
}


export async function getTeams(){
    let teams = [];
    for (const team of await fetcher("teams")) {
        teams.push(new Team(team.id, team.name, team.wins, team.losses, team.matchesPlayed, team.matchesWon))
    }
    return teams;
}

export async function getTeam(id){
    const team = await fetcher(`team/${id}`);
    return new Team(team.id, team.name, team.wins, team.losses, team.matchesPlayed, team.matchesWon);
}