import { Client } from 'appwrite';

const apiEndpoint = import.meta.env.VITE_APPWRITE_API_ENDPOINT
const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const apiKey = import.meta.env.VITE_APPWRITE_API_KEY;

const client = new Client()
    .setEndpoint(apiEndpoint)  // Your API Endpoint
    .setProject(projectID);   // Your project ID

export default client; 
