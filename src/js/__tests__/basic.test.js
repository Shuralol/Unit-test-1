// eslint-disable-next-line import/extensions
import { getStatus } from '../basic.js';

describe('getStatus function', () => {
  test('should return "healthy" for health > 50', () => {
    const status = getStatus({ name: 'Маг', health: 90 });
    expect(status).toBe('healthy');
  });

  test('should return "wounded" for health from 50 to 15', () => {
    const status = getStatus({ name: 'Маг', health: 30 });
    expect(status).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    const status = getStatus({ name: 'Маг', health: 10 });
    expect(status).toBe('critical');
  });
});
