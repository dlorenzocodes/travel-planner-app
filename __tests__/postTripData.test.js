import "regenerator-runtime/runtime";
const post = require('../src/client/js/postTripData');

global.fetch = jest.fn(() => {
    return Promise.resolve({
        city: 'Havana'
    });
});

window.alert = jest.fn();

describe('postData', () => {
    // afterEach(() => {jest.resetAllMocks()});

    it('should post JSON object to /newTrip end point', async () => {
        const response = await post.postTripData({city: 'Havana'});
        expect(response).toMatchObject({"city": "Havana"});
    });

    it('should handle errors when promise rejected', async () => {
        fetch.mockImplementationOnce(() => Promise.reject(new Error('API failure')));

        try{
            const response = await post.postTripData({city: 'Havana'});
        }catch(e){
            expect(e).toEqual({error: 'API failure',});
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert.mock.calls[0][0]).toContain('Error');
        }
    });
});