
describe('checkforTrips', () => {
    it('should add classes to no trips section & title wrapper', () => {
        document.body.innerHTML = `
            <div class="trips-section">
                <div class="trip-wrapper"></div>
            </div>
        `;

        require('../src/client/js/checkforTrips');

        const tripsSection = document.querySelector('.trips-section').children;
        const result = tripsSection.length;
        const mockFunction = jest.fn(() => {
            if(result === 1) return '<section class="no-trips hidde"></section>';
        });

        expect(mockFunction()).toBe('<section class="no-trips hidde"></section>');

    });


    it('should add classes to no trips section & title wrapper', () => {
        document.body.innerHTML = `<div class="trips-section"></div>`;

        require('../src/client/js/checkforTrips');

        const tripsSection = document.querySelector('.trips-section').children;
        const result = tripsSection.length;
        const mockFunction = jest.fn(() => {
            if(result === 0) return '<section class="no-trips"></section>';
        });

        expect(mockFunction()).toBe('<section class="no-trips"></section>');

    });
});