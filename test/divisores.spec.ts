import { Divisores } from '../src/divisores';

describe('Multiplos', () => {
    it('Multiplos', () => {
        expect(typeof Divisores.division).toEqual('function');
        expect(Divisores.division()).toEqual('Multiplos');
    });

    it('async', (done) => {
        setTimeout(() => {
            expect(1).toEqual(1);
            done();
        }, 3000);
    });
});
