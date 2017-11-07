import Raven from 'raven-js';

const sentry_key = '620e60309a94475b82ecfac9a21eb876';
const sentry_app = '240852';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
