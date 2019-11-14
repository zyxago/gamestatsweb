import fetcher from "./dataRetriver";

export class Team{
    constructor(id, name, wins, losses){
        this.id = id;
        this.name = name;
        this.wins = wins;
        this.losses = losse;
    }
}


export function getTeams(){
    let teams = [];
    for (const team of fetcher("teams")) {
        teams.push(new Team(team.id, team.name, team.wins, team.losses))
    }
    return teams;
}

export function getTeam(id){
    let team = fetcher(`team/${id}`);
    return new Team(team.id, team.name, team.wins, team.losses);
}