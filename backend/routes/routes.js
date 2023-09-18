const router = require("express").Router();

router.get("/api/ping", (req, res) => {
  const uptime = process.uptime();
  const currentTime = new Date();
  res.json({
    ok: true,
    status: "Pong",
    uptime: uptime,
    currentTime: currentTime,
  });
});

module.exports = router;
