import * as card from '../actions/card';
import { types } from '@babel/core';
import {obj} from '../actions/card'




describe('card', () => {
    it('should create an action to add to card', () => {
        const expectedAction = {
            type: types.ADD_TO_CARD,
            payload: obj
        }
        expect(card.addToCard()).toEqual(expectedAction);
    })
});