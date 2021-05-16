const router = require("express").Router();
const { Logger } = require("logger");
const logger = new Logger("Server Status");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let status;
  try {
    status = process.uptime();
  } catch (e) {
    logger.error(e);
    res.status(500);
    return res.send();
  }
  res.json(status);
  logger.info(`Server Uptime:${status} seconds`);
});

module.exports = router;
