import cron from "node-cron";

cron.schedule("* * * * *", () => {
  console.log("Running this every minute");
});
