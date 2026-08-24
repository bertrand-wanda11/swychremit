// SwychRemitWeb is a static SPA (see Dockerfile — nginx serves the built
// dist/ only, no /api proxy_pass), so relative fetch('/api/...') calls never
// reach AdminWeb in production — they just fall through to index.html. All
// API calls must go through this absolute base URL instead.
//
// Defaults to the same host the SwychRemitApp Flutter client uses
// (lib/services/auth_api.dart's API_BASE_URL default). Override per
// environment via VUE_APP_API_BASE_URL in a .env file.
export const API_BASE_URL = (process.env.VUE_APP_API_BASE_URL || 'https://api.accountpe.com').replace(/\/+$/, '');

export function apiFetch(path, options) {
    return fetch(`${API_BASE_URL}${path}`, options);
}
