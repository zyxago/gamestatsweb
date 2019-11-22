export async function fetcher(path){
    const response = await fetch("/api/"+path, {
        method: "GET"
    });
    const data = await response.json();
    return data;
}

export async function requestHandler(path, method, authToken, data){
    const response = await fetch("/api/"+path, {
        method: method,
        headers: {
            'Content-Type': "application/json",
            'Authorization': authToken
        },
        body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
}