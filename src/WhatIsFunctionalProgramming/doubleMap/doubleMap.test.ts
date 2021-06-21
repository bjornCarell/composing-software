import { Player, doubleMap } from './doubleMap';

describe('double map functor', () => {
  it('doubles property point for a player', () => {
    const players: Player[] = [
      { name: 'Susan', points: 3},
      { name: 'Ahmed', points: 6},
      { name: 'Jing', points: 9},
    ];

    const expected = [6, 12, 18];

    const actual = doubleMap(players);

    expect(actual).toEqual(expected);
  });
});