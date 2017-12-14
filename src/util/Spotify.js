const clientId = 'a38daf8b65684f37ab49d553519ec834';
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {
	getAccessToken(token) {
		if (accessToken) {
			return accessToken;
		}

		const authAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const authExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (authAccessToken && authExpiresIn) {
      accessToken = authAccessToken[1];
      let expiresIn = Number(authExpiresIn[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
			const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirectUri}`;
			window.location.href = authUrl;
    }
	},

	search(term) {
		const accessToken = Spotify.getAccessToken();
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${term}`,
    {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
    	return response.json();
    }).then(jsonResponse => {
	    if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => ({
		        id: track.id,
		        name: track.name,
		        artist: track.artists[0].name,
		        album: track.album.name,
		        uri: track.uri
        }));
	    } else {
        return [];
	    }
	  });
	},
}

export default Spotify;