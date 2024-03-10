interface keyValue {
  [key: string]: string;
}

export const env: keyValue = {
  ENVIRONMENT: String(process.env.ENVIRONMENT),
  NEXT_DASHBOARD_SERVICE_PORT: String(process.env.NEXT_DASHBOARD_SERVICE_PORT),
};

export const files: keyValue = {
  ENV_FILE_PATH: String(env.ENVIRONMENT === "production" ? " " : ".env.local"),
  LOCAL_LOG: String(process.env.LOCAL_LOG),
  DATABASE_LOG: String(process.env.DATABASE_LOG),
  LOG_FILE_NAME: String(process.env.LOG_FILE_NAME),
};

export const smtpMail: keyValue = {
  SMTP_EMAIL: String(process.env.SMTP_EMAIL),
  SMTP_PASSWORD: String(process.env.SMTP_PASSWORD),
};

export const dashboardDb: keyValue = {
  DASHBOARD_MONGODB_URI: String(process.env.DASHBOARD_MONGODB_URI),
  DASHBOARD_DATABASE_NAME: String(process.env.DASHBOARD_DATABASE_NAME),
  DASHBOARD_MONGODB_CONFIG: String(process.env.DASHBOARD_MONGODB_CONFIG),
};

export const urls: keyValue = {
  DASHBOARD_MONGODB_URI: String(
    `${dashboardDb.DASHBOARD_MONGODB_URI}/${dashboardDb.DASHBOARD_DATABASE_NAME}?${dashboardDb.DASHBOARD_MONGODB_CONFIG}`
  ),
};

export const github: keyValue = {
  GITHUB_CLIENT_ID: String(process.env.GITHUB_CLIENT_ID),
  GITHUB_CLIENT_SECRET: String(process.env.GITHUB_CLIENT_SECRET),
};

export const google: keyValue = {
  GOOGLE_CLIENT_ID: String(process.env.GOOGLE_CLIENT_ID),
  GOOGLE_CLIENT_SECRET: String(process.env.GOOGLE_CLIENT_SECRET),
};

export const logger: keyValue = {
  LOG_LEVEL: String(process.env.LOG_LEVEL),
  LOCAL_LOG: String(process.env.LOCAL_LOG),
  DATABASE_LOG: String(process.env.DATABASE_LOG),
  LOG_FILE_NAME: String(process.env.LOG_FILE_NAME),
};
