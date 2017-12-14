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
			window.location = authUrl;
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

	savePlaylist(playlistName, trackURIs) {
		const userAccessToken = accessToken;
		const headers = {Authorization: `Bearer ${userAccessToken}`};
		let userId, playlistID;
		if (playlistName === undefined || trackURIs.length < 1) {
			return;
		}
		
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me`,
			{
				headers: headers,
			}).then(response => {
				return response.json();
			}).then(jsonResponse => {
				userId = jsonResponse.id;
				// create playlist name
				return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists`,
				{
					headers: headers,
					method: 'POST',
					body: JSON.stringify({ name: playlistName }),
				}).then(response => {
					return response.json();
				}).then(jsonRsponse => {
					playlistID = jsonRsponse.id;
					console.log(trackURIs);
					// save tracks to playlist
					return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, 
					{
						headers: headers,
						method: 'POST',
						body: JSON.stringify({ uris: trackURIs }),
					}).then(response => {
						return response.json();
					}).then(jsonResponse => {
						console.log(jsonResponse);
					});
				});
		});
	}
}

export default Spotify;