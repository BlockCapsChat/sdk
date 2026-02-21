import browserService from "../services/browser.service.js";
import { success, error } from "../utils/response.js";

export const launchBrowser = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json(error("URL is required"));
    }

    const session = await browserService.createSession(url);
    res.json(success(session));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};

export const getSession = async (req, res) => {
  try {
    const session = browserService.getSession(req.params.id);
    if (!session) {
      return res.status(404).json(error("Session not found"));
    }

    res.json(success(session));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};

export const closeSession = async (req, res) => {
  try {
    const result = browserService.closeSession(req.params.id);
    if (!result) {
      return res.status(404).json(error("Session not found"));
    }

    res.json(success({ message: "Session closed" }));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};
