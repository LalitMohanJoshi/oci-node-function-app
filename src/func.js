import { handle } from '@fnproject/fdk';
import { hello_func } from './index.js';
    
handle(async function(input){
  let name = 'World';
  if (input.name) {
    name = input.name;
  }
  const objResponse = await hello_func(name);
  return objResponse;
})
