export type Player = {
  name: string,
  points: number,
}

const double = (player: Player): number => player.points * 2;
export const doubleMap = (players: Player[]) => players.map(double);