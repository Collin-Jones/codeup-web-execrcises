const lastRepo = function (username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `${GITHUB_TOKEN}`}})
        .then(response => response.json())
        .then(result => {
            return result[0];
        })

}
lastRepo('Collin-Jones')