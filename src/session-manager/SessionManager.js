/* eslint-disable no-console */
// @flow
import StorageService from './StorageService';

class SessionManagerClass {
  SESSION_KEY = '@Session:userData';

  saveSession(params: Object) {
    const { accessToken, id, ttl } = params;
    try {
      return StorageService.saveItem(
        this.SESSION_KEY,
        JSON.stringify({ accessToken, id, ttl })
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  loadSession() {
    try {
      const token = StorageService.getItem(this.SESSION_KEY);
      if (!token) return null;
      return JSON.parse(token);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  updateSession(params: Object): void {
    this.saveSession(params);
  }

  deleteSession() {
    try {
      return StorageService.deleteItem(this.SESSION_KEY);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  isAuthenticated(): boolean {
    if (this.loadSession() != null) return true;
    return false;
  }
}

const SessionManager = new SessionManagerClass();

export default SessionManager;
