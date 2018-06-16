import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: ENV.apiURL,
  namespace: 'api/v1',
  // coalesceFindRequests: true,
});
