import {fetcher, requestHandler} from "./dataHandler";

export class Match {
    constructor(gameId, homeId, homeScore, homeTeam, awayId, awayScore, awayTeam, winner) {
        this.gameId = gameId;
        this.homeId = homeId;
        this.homeScore = homeScore;
        this.homeTeam = homeTeam;
        this.awayId = awayId;
        this.awayScore = awayScore;
        this.awayTeam = awayTeam;
        this.winner = winner;
    }
}

export async function getMatches() {
    let matches = [];
    for (const match of await fetcher("matches")) {
        matches.push(new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner));
    }
    return matches;
}

export async function getMatch(id) {
    let match = await fetcher(`match/${id}`);
    return new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner);
}

export async function getTeamMatches(id) {
    let matches = [];
    for (const match of await fetcher(`teamMatches/${id}`)) {
        matches.push(new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner));
    }
    return matches;
}

export async function addMatch(match, authToken){
    let status = await requestHandler(`match`, "POST", authToken, match);
    console.log(status);
}

export async function removeMatch(id, authToken){
    let status = await requestHandler(`match/${id}`, "DELETE", authToken);
    console.log(status);
}

export async function editMatch(match, authToken){
    console.log(JSON.stringify(match));
    let status = await requestHandler(`match`, "PUT", authToken, match);
    console.log(status);
}