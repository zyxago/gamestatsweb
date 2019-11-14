export default async function fetcher(path){
    let response = await fetch("http://localhost:8080/gameStatsApp/api/" + path);
    return await response.json();
}