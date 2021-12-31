import React, { memo } from 'react';

export const AboutSection = memo(function AboutSection () {
  return (<section className="p-3 mb-3 bg-light rounded">
    <h3 className="fst-italic">About</h3>
    <h5 className="mb-3">
      Expenses Web app implemented by <a href="https://github.com/elartix" target="_blank" rel="noreferrer">Vladimir Mechkauskas</a>
    </h5>
    <ul className="list-unstyled">
      <li>Typescript</li>
      <li>React: ^17.0.2</li>
      <li>Redux: 7.2.0</li>
      <li>Saga: 1.1.3</li>
      <li>redux-saga-controller: 1.1.3</li>
      <li>redux-form: 8.3.8</li>
      <li>reactstrap: 9.0.1</li>
    </ul>
  </section>);
});


