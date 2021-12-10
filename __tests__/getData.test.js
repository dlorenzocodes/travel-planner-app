import "regenerator-runtime/runtime";
const d = require('../src/client/js/getData');

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({name: 'Havana'})
    });
});

describe('getData', () => {
    
    afterEach(() => {
        fetch.mockClear();
    });
    
    it('should get data from /getData end point', async () => {
        const result = await d.getData();
        expect(result).toEqual({name: 'Havana'});
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/getData');
    });


    it('should throw en error if promise rejected', async () => {
        fetch.mockImplementationOnce(() => Promise.reject('API failure'));

        try{
            const result = await d.getData();
            expect(result).toEqual({name: 'Havana'});
        }catch(e){
            expect(e.message).toEqual('API failure');
        }
    });
});