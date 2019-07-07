import card from '../redusers/card';
import { types } from '@babel/core';




describe('card reducer', () => {
    it ('should return the initial state', () => {
        expect(card(undefined, {})).toEqual({
            items: []
        })
    })
})

it('should handle ADD_TO_CARD', () => {
    expect(card(undefined, {type: types.ADD_TO_CARD})).toEqual({
        items: []
    })
})

