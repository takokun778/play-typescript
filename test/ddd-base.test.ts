import { DateTime } from 'luxon';
import { User } from '../src/ddd-base';

describe('ddd-base', () => {
    test('normal test', () => {
        const user = User.new({
            lastName: '大園',
            firstName: '玲',
            birthday: DateTime.fromSQL('2000-04-18'),
        });
        expect(user.props.id.toValue()).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
        expect(user.props.lastName).toBe('大園');
        expect(user.props.firstName).toBe('玲');
        expect(user.props.birthday).toEqual(DateTime.fromSQL('2000-04-18'));
    });
});
