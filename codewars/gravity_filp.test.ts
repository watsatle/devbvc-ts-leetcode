import { test , expect } from 'bun:test'
import { flip } from './gravity_filp'

test('should get [1, 2, 2, 3]' , () => {
    expect (flip('R',[3, 2, 1, 2])) .toEqual ([1, 2, 2, 3]);})

test('should get [5, 5, 4, 3, 1]' , () => {
    expect (flip('L', [1, 4, 5, 3, 5 ])) .toEqual ([5, 5, 4, 3, 1]);})

test('should get [8, 5, 5, 3, 1]' , () => {
    expect (flip('L', [8, 5, 5, 1, 3 ])) .toEqual ([8, 5, 5, 3, 1]);})