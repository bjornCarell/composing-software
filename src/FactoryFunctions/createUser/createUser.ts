type UserInfo = {
  username: string,
  avatar: string,
}

type UserObj = {
  username: string;
  avatar: string;
  setUserName: (username:string) => UserObj;
}

export const createUser = ({ username, avatar }: UserInfo): UserObj => ({
  username,
  avatar,
  setUserName(username) {
    this.username = username;
    return this;
  }
});

export const createUserWithDefaults = ({
  username = 'Anonymous',
  avatar = 'anon.png',
} = {}): UserInfo => ({
  username,
  avatar,
});
