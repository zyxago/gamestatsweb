export default async function fetcher(path){
    const response = await fetch("/"+path, {
        method: "GET"
    });
    const data = await response.json();
    return data;
}

export async function requestHandler(path, method, authToken){
    const response = await fetch("/"+path, {
        method: method,
        headers: {
            'Authorization': authToken
        }
    })
    const data = await response.json();
    return data;
}