export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = (authToken) => {
  localStorage.setItem("authToken", authToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const saveRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};
