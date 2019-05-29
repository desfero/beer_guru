import React from "react";

const CriticalUIError = ({ message }) => (
  <section role="alert">
    <h1>We're sorry — something's gone wrong.</h1>
    {message && <p>{message}</p>}
  </section>
);

export { CriticalUIError };
