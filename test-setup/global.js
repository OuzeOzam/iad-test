import { URL } from 'node:url';
import { config } from '@vue/test-utils';
import { vi } from 'vitest';

// Disabled vue's warnings provided by vue-test-utils
config.global.config.warnHandler = () => null;
// this is needed for Vuetify
// https://github.com/vuetifyjs/vuetify/issues/14749
// needed to be imported BEFORE vuetify init
global.CSS = { supports: () => false };

// NOTE: Element.animate() isn't supported yet by happy-dom
// https://github.com/capricorn86/happy-dom/issues/502
// mock this in a “good enough” way
window.Element.prototype.animate = () => ({
  finished: Promise.resolve(),
});

window.happyDOM.setInnerWidth(1024);
window.happyDOM.setInnerHeight(768);

// happyDOM was masking URL object with an incomplete one
// https://github.com/vitest-dev/vitest/issues/2305#issuecomment-1311420462
globalThis.URL = URL;

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal(`ResizeObserver`, ResizeObserverMock);
