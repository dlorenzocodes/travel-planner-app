
const days = require('../src/client/js/daysLeftToTrip');

window.alert = jest.fn();

describe('daysLeftToTrip',() => {
    it('should return empty if departure day not provided', () => {
        const result = days.daysLeft('');
        expect(result).toBe('');
    });

    it('should return days left if departure day provided', () => {
        const result = days.daysLeft('2021-12-14');
        expect(result).toBe('(3 days left)');
    });

    it('should return 0 if departure day has past', () => {
        const result = days.daysLeft('2021-12-07');

        expect(result).toBe('(0 day left)');
        window.alert.mockClear();
    });

    it('should return day instead of days if only a day is left', () => {
        const result = days.daysLeft('2021-12-10');
        expect(result).toBe('(0 day left)');
    });

});