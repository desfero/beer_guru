class FetchError extends Error {
    name = 'FetchError';
    constructor({ statusCode, message, error }) {
        super(`${statusCode}: ${message} - ${error}`);

        this.statusCode = statusCode;
        this.message = message;
        this.code = error;
    }
}

const fetchWithError = (...args) => fetch(...args)
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
        if (responseOk) {
            return body;
        } else {
            throw new FetchError(body);
        }
    });

export {fetchWithError, FetchError};
