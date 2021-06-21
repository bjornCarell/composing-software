export type User = {
  name: string,
  avatarThumbnail: string,
}

export const createUser = ({
  name = 'Anonymous',
  avatarThumbnail = '/avatars/anonymous.png'
}): User => ({
  name,
  avatarThumbnail,
});

