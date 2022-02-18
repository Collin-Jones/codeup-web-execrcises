function lastRepo(username) {
    let gitPromise = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `${GITHUB_TOKEN}`}});
        gitPromise.then(response => response.json())
        .then(event => console.log(new Date(event[0].created_at).toDateString()));
            // return result[0];
}
lastRepo('Collin-Jones');