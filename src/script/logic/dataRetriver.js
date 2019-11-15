export default async function fetcher(path){
    let response = await fetch("/"+path);
    let data = await response.json();
    return data;
}