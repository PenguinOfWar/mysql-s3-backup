import { envsafe, str } from "envsafe";

export const env = envsafe({
  RUN_ON_STARTUP: str(),
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_HOST: str(),
  BACKUP_DATABASE_PORT: str(),
  BACKUP_DATABASE_USER: str(),
  BACKUP_DATABASE_PASSWORD: str(),
  BACKUP_DATABASE_NAME: str({
    desc: "Name of the database to backup. Leave empty to backup all databases.",
    default: "",
    allowEmpty: true,
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: "The cron schedule to run the backup on.",
    default: "0 5 * * *",
    allowEmpty: true,
  }),
  AWS_S3_ENDPOINT: str({
    desc: "The S3 custom endpoint you want to use.",
    default: "",
    allowEmpty: true,
  }),
  DEBUG: str({
    desc: "Output mysql/mysqldump commands to console.",
    default: "0",
    allowEmpty: true,
  }),
});
