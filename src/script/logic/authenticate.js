export function verifyAuthentication(authToken) {
    console.log(authToken);
    return true;
}

export async function getAuthToken(username, password) {
    const authString = `Basic ${btoa(username + ":" + password)}`;

    const res = await fetch("/authenticate", {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    });
    const data = await res.text();
    console.log(data);
    return data;
}