export function setAuth(token, user) {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
}

export function clearAuth() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
}

export function getToken() {
  return sessionStorage.getItem("token");
}

export function getUser() {
  const raw = sessionStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
}

// This reads the "Fine Print" inside the token to check expiration
export function parseJwt(token) {
  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(payloadJson);
  } catch (e) {
    return null;
  }
}

// THE PROTECTOR: This tells the app if the user is allowed in
export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;

  const payload = parseJwt(token);
  if (!payload) return false;

  // Check if token is expired (payload.exp is in seconds, Date.now() is in ms)
  const isExpired = payload.exp * 1000 < Date.now();
  if (isExpired) {
    clearAuth(); // Wipe the data if it's too old
    return false;
  }

  return true;
}