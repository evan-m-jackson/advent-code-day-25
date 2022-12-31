import {snafu} from '../src/index';

describe('testing snafu method', () => {
    test('1 should result in SNAFU number 1', () => {
        expect(snafu(1)).toBe('1');
    });

    test('2 should result in SNAFU number 2', () => {
        expect(snafu(2)).toBe('2');
    });

    test('3 should result in SNAFU number 1=', () => {
        expect(snafu(3)).toBe('1=');
    });

    test('4 should result in SNAFU number 1-', () => {
        expect(snafu(4)).toBe('1-');
    });

    test('5 should result in SNAFU number 10', () => {
        expect(snafu(5)).toBe('10');
    });

    test('6 should result in SNAFU number 11', () => {
        expect(snafu(6)).toBe('11');
    });

    test('7 should result in SNAFU number 12', () => {
        expect(snafu(7)).toBe('12');
    });

    test('8 should result in SNAFU number 2=', () => {
        expect(snafu(8)).toBe('2=');
    });

    [125, 25, 5, 1]

    [10,2]

});