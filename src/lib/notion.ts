import { Client } from "@notionhq/client";

// Notion client initialization
// Will only work when NOTION_API_KEY is set
export const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// Helper to check if Notion is configured
export function isNotionConfigured(): boolean {
    return !!(
        process.env.NOTION_API_KEY &&
        process.env.NOTION_API_KEY !== "secret_xxxxx" &&
        process.env.NOTION_DATABASE_ID &&
        process.env.NOTION_DATABASE_ID !== "xxxxx"
    );
}
