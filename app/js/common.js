var pokemon = ['Pikachu', 'Psyduck', 'Slowpok'];

'bad array code'
// pokemon.push('Bulbasaur');
// pokemon.push('Metapod');
// pokemon.push('Weedle');
// console.log(pokemon);

'good array code'
// push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

// unshift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];
console.table(pokemon);


