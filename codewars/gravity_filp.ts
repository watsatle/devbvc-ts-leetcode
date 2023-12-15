// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/typescript


//find number
//

export function flip(dir: string, arr: number[]): number[] {
  // Your code here
   return dir === 'R'? arr.sort((a, b) => a - b): arr.sort((a, b) => b - a) 
  
}