/**
 * Client-side GraphQL data fetch example with HTML5 Fetch API
 *
 * @param  {String} url     URL to the GraphQL endpoint
 * @param  {String} query   The GraphQL query
 * @return {Promise}        the request resolving promise object
 */
function fetchData({ url, query, variables }) { //eslint-disable-line no-unused-vars
	let requiredHeaders = new Headers({
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	});

	let req = new Request(url, {
		method: 'POST',
		headers: requiredHeaders,
		body: JSON.stringify({
			query,
			variables,
		}),
	});


	return fetch(req).then(response => {
		console.log('response.status:', response.status);
		if (response.ok) {
			return response.json(); // result will be JSON object
		} else {
			return response.json(); // Even response is 4**, we still receive json object describe error
		}
	}).catch(err => {
		console.log('Errors:', err);
		return err;
	});
}

export default fetchData;
