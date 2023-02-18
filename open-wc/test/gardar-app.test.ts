import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { GardarApp } from '../src/gardar-app.js';
import '../src/gardar-app.js';

describe('GardarApp', () => {
  let element: GardarApp;
  beforeEach(async () => {
    element = await fixture(html`<gardar-app></gardar-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
