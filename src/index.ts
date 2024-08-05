import { CronJob } from "cron";
import { backup } from "./backup";
import { env } from "./env";

if (env.RUN_ON_STARTUP || env.SINGLE_SHOT_MODE) {
  console.log("Running on start backup...");

  backup();
}

const job = new CronJob(env.BACKUP_CRON_SCHEDULE, async () => {
  try {
    await backup();
  } catch (error) {
    console.error("Error while creating backup: ", error);
  }
});

job.start();

console.log("Backup cron scheduler started.");
