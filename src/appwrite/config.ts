import { config } from '@/config/config';
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(config.appwriteUrl) // Your Appwrite Endpoint
    .setProject(config.appwriteProjectId);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
