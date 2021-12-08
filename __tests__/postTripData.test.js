const post = require('../src/client/js/postTripData');

global.fetch = jest.fn(() => {
    Promise.resolve({"city":"Havana"});
});

describe('postTripData', () => {
    it('should post trip data to newtrip end point', async () => {
        const result = await post.postTripData({ city: Havana});
        expect(result).toEqual({"city":"Havana"});
    });
});