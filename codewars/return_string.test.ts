import { test , expect } from 'bun:test'
import { greet } from './return_strings'


test ('shound get "Hello, Shingles how are you doing today?"',  () => {
expect(greet("Hello, <name> how are you doing today?")).toEqual("Hello, Shingles how are you doing today?");});


test ('shound get "Hello, Pop how are you doing today?"',  () => {
    
    expect(greet("Hello, <name> how are you doing today?")).toEqual("Hello, Pop how are you doing today?");});


