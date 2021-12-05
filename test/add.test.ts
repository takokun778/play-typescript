import { TableTestDriven } from './table-test-driven';

type Input = {
    a: number;
    b: number;
};

const add = (input: Input) => {
    if (input.a < 0 && input.b < 0) {
        throw new Error('');
    }
    return input.a + input.b;
};

const tests: TableTestDriven<Input, number>[] = [];

const test1: TableTestDriven<Input, number> = {
    name: '1+1',
    setup: () => {},
    args: { a: 1, b: 1 },
    expected: 2,
    isErr: false,
};
tests.push(test1);

const test2: TableTestDriven<Input, number> = {
    name: '-1+(-1)',
    setup: () => {},
    args: { a: -1, b: -1 },
    isErr: true,
    err: new Error(''),
};
tests.push(test2);

describe('add', () => {
    tests.forEach((t) => {
        test(t.name, () => {
            if (t.isErr) {
                expect(() => add(t.args)).toThrowError(t.err);
                return;
            }

            expect(add(t.args)).toBe(t.expected);
        });
    });
});
