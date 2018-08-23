import React from 'react';
import {map, toPairs, compose, join } from 'ramda';

class FetchError extends Error {
    name = 'FetchError';

    constructor({statusCode, message, error}) {
        super(`${statusCode}: ${message} - ${error}`);

        this.statusCode = statusCode;
        this.message = message;
        this.code = error;
    }
}


// change to composeP
const fetchWithError = (...args) => fetch(...args)
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
        if (responseOk) {
            return body;
        } else {
            throw new FetchError(body);
        }
    });

// const queryString = Object.keys(params).map((key) => {
//     return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
// }).join('&');

const applyThreshold = (value, direction, threshold = 0.5) => value * (direction + threshold) * direction;

const queryString = compose(
    join('&'),
    map(join('=')),
    toPairs,
);

export { fetchWithError, FetchError, queryString, applyThreshold };
