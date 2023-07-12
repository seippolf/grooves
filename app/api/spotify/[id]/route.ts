type ShortLifeToken = {
    creation: number,
    token: {
        access_token: string,
        bearer: string,
        expires_in: number
    }
};

export type SimpleAlbum = {
    id: string,
    name: string,
    artist: string,
    image: {
      url: string,
      height: string,
      width: string
    }
  }

async function generateShortLifeToken(): Promise<ShortLifeToken> {

    // TODO: Cache a token to only regenerate after an hour (maybe in a file)

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const uri: string = 'https://accounts.spotify.com/api/token';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    }

    const response = await fetch(uri, requestOptions);
    const responseJSON = await response.json();

    return {
        creation: Date.now(),
        token: responseJSON
    }
}

export async function getSpotifyAlbumData(albumIds: string[]) {

    let albumsData: SimpleAlbum[] = [];

    const shortLifeToken = await generateShortLifeToken();
    const requestOptions = {
        headers: {'Authorization': `Bearer ${shortLifeToken.token.access_token}`}
    }

    for (let i = 0; i < albumIds.length; i++) {
        let id = albumIds[i];
        let uri = `https://api.spotify.com/v1/albums/${id}`
        let response = await fetch(uri, requestOptions);
        let responseJSON = await response.json();
        let simpleAlbum: SimpleAlbum = {
            id: id,
            name: responseJSON.name,
            artist: responseJSON.artists[0].name,
            image: responseJSON.images[0]
        }
        albumsData[i] = simpleAlbum;
    }

    return albumsData;
}