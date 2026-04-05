import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: string;
  DB_URI: string;
  NODE_ENV: "development" | "production";
  BYCRYPT_SALT_ROUND: string;
  JWT_ACCESS_EXPIRE: string;
  JWT_ACCESS_SECRET: string;
  SUPER_ADMIN_PASSWORD: string;
  SUPER_ADMIN_EMAIL: string;
}
const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables: string[] = [
    "PORT",
    "DB_URI",
    "NODE_ENV",
    "BYCRYPT_SALT_ROUND",
    "JWT_ACCESS_EXPIRE",
    "JWT_ACCESS_SECRET",
    "SUPER_ADMIN_PASSWORD",
    "SUPER_ADMIN_EMAIL",
  ];

  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing require environment variable ${key}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DB_URI: process.env.DB_URI as string,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
    BYCRYPT_SALT_ROUND: process.env.BYCRYPT_SALT_ROUND as string,
    JWT_ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE as string,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD as string,
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
  };
};

export const envVars = loadEnvVariables();
