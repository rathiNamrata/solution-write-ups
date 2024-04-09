'use strict';

import { addition } from './solution1.js';

describe('Basic Tests', () => {
    it(' 1 + 2  ->  3', () => {
        expect(addition(1, 2)).toEqual(3);
    });
    it('should return 3 when 8 is passed', () => {
        expect(addition(8, 9)).toEqual(17);
    });
    it('should return 4 when 11 is passed', () => {
        expect(addition(11, 3)).toEqual(14);
    });
});
