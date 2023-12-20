//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

export function hello(name = ''): string {

  const first = (`Hello, ${name}`)
  const secound = first[0].toUpperCase() + first.slice(1).toLowerCase();
  return  secound;
    
    // return `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 
    //   'World!'}`;
      };