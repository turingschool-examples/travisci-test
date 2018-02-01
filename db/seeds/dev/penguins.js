exports.seed = (knex, Promise) => {
  return knex('penguins').del()
    .then(() => {
      return knex('penguins').insert([
        {species: 'gentoo'},
        {species: 'chinstrap'},
        {species: 'adelie'},
        {species: 'emporer'}
      ]);
    });
};
