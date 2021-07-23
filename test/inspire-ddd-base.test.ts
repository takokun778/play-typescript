import { DateTime } from 'luxon';
import { User } from '../src/inspire-ddd-base';

describe('ddd-base', () => {
    test('normal test', () => {
        const user = User.new({
            lastName: '大園',
            firstName: '玲',
            birthday: DateTime.fromSQL('2000-04-18'),
        });
        expect(user.id).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
        expect(user.lastName).toBe('大園');
        expect(user.firstName).toBe('玲');
        expect(user.birthday).toEqual(DateTime.fromSQL('2000-04-18'));
    });
});
