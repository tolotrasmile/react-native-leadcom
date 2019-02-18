const URL = 'http://leadcom.dashboard.shaft-it.com/api/ws_login';

export async function login({ email, password }) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  if (response.ok) {
    const json = response.json();
    return json;
  }
  return null;
}
