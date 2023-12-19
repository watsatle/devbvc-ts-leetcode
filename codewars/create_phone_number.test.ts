import { test , expect } from 'bun:test'
import { createPhoneNumber } from './create_phone_number'
// expect().toEqual()

test ('should get (012) 345-6789',  () => {
expect(createPhoneNumber([0,1,2,3,4,5,6,7,8,9])).toEqual("(012) 345-6789");});
test ('should get (111) 111-1111',  () => {
expect(createPhoneNumber([1,1,1,1,1,1,1,1,1,1])).toEqual("(111) 111-1111");});
test ('should get (123) 456-7890',  () => {
expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toEqual("(123) 456-7890");});
test ('should get (081) 588-8855',  () => {
expect(createPhoneNumber([0,8,1,5,8,8,8,8,5,5])).toEqual("(081) 588-8855");});