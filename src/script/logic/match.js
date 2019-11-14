function getMatches(){
    return fetcher("games");
}

function getMatch(id){
    return fetcher(`game/${id}`);
}