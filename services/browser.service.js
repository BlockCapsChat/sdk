import { v4 as uuidv4 } from "uuid";

class BrowserService {
  constructor() {
    this.sessions = new Map();
  }

  async createSession(url) {
    const id = uuidv4();

    // Simulated headless browser instance
    const session = {
      id,
      url,
      status: "running",
      createdAt: new Date()
    };

    this.sessions.set(id, session);
    return session;
  }

  getSession(id) {
    return this.sessions.get(id);
  }

  closeSession(id) {
    return this.sessions.delete(id);
  }
}

export default new BrowserService();
