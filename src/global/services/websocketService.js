import * as signalR from '@microsoft/signalr';

const serviceUrl = 'https://localhost:5001/api';
const wsUrl = 'https://localhost:5001';

export const createNewMatch = async (configuration) => {
    const matchUrl = `${serviceUrl}/Matches`;
    const response = await fetch(matchUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(configuration),
    });
    const result = response.json();

    return result;
};

export const findMatch = async (hash) => {
    const matchUrl = `${serviceUrl}/Matches/${hash}`;
    const result = await fetch(matchUrl);

    return result.json();
};

export const createSocketConnection = async () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(`${wsUrl}/hubs/match`, {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();

    async function start() {
        try {
            await connection.start();
            console.log('websocket connected');
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    }

    connection.onclose(start);

    // Start the connection.
    await start();

    return connection;
};

export const joinMatch = async (connection, hash) => {
    try {
        await connection.invoke('joinMatch', hash);
        console.log('player conneted to match ', hash);
    } catch (err) {
        console.log(err);
    }
};
