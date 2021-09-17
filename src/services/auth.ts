interface User {
  name: string;
}

export const isAuthenticated = () => localStorage.getItem('HVAR-WHIRLPOOL_USER') !== null;

export const loggedIn = (user: User) => {
  localStorage.setItem('HVAR-WHIRLPOOL_USER', JSON.stringify(user));
};

export const getUser = () => localStorage.getItem('HVAR-WHIRLPOOL_USER');

export const loggedOut = () => {
  localStorage.removeItem('HVAR-WHIRLPOOL_USER');
};
