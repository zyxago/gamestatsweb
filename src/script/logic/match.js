import fetcher from "./dataHandler";

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
    for (const match of await fetcher("games")) {
        matches.push(new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner));
    }
    return matches;
}

export async function getMatch(id) {
    let match = await fetcher(`game/${id}`);
    return new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner);
}

export async function getTeamMatches(id) {
    let matches = [];
    for (const match of await fetcher(`teamGames/${id}`)) {
        matches.push(new Match(match.gameId, match.homeId, match.homeScore, match.homeTeam, match.awayId, match.awayScore, match.awayTeam, match.winner));
    }
    return matches;
}