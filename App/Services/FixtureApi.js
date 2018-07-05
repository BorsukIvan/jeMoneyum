import rootData from '../Fixtures/root.json';
import rateLimitData from '../Fixtures/rateLimit.json';
import gantmanData from '../Fixtures/gantman.json';
import skellockData from '../Fixtures/skellock.json';


export default {
  // Functions return fixtures
  getRoot: () => ({
    ok: true,
    data: rootData
  }),
  getRate: () => ({
    ok: true,
    data: rateLimitData
  }),
  getUser: username => ({
    ok: true,
    data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
  })
};
