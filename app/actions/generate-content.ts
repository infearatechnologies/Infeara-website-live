"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateContent(prompt: string, context: string) {
    if (!process.env.GEMINI_API_KEY) {
        return { error: "Gemini API Key is missing. Please add GEMINI_API_KEY to your .env.local file." };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemPrompt = `
        You are an expert content writer for a technology blog.
        Your task is to generate a structured blog post based on the user's input (which could be a topic, raw notes, or a rough draft).
        
        You must return the response in STRICT JSON format with the following structure:
        {
            "title": "A catchy, SEO-friendly title (H1)",
            "slug": "seo-friendly-url-slug",
            "excerpt": "A short, engaging summary (max 160 chars)",
            "content": {
                "root": {
                    "children": [
                        {
                            "type": "heading",
                            "level": 2,
                            "children": [{ "text": "Introduction or First Section" }]
                        },
                        {
                            "type": "paragraph",
                            "children": [{ "text": "Content..." }]
                        },
                        {
                            "type": "heading",
                            "level": 3,
                            "children": [{ "text": "Sub-section" }]
                        }
                        // ... more blocks
                    ]
                }
            }
        }

        Rules:
        1. **Title**: Create a compelling H1-equivalent title.
        2. **Slug**: Generate a URL-friendly slug from the title (lowercase, hyphens).
        3. **Structure**: Use "heading" blocks (level 2 for main sections, level 3 for subsections) to organize the content logically.
        4. **Content**: Expand on the user's input. If they provide raw notes, turn them into polished prose.
        5. **Format**: Do NOT use markdown in the JSON values.
        `;

        const fullPrompt = `${systemPrompt}\n\nTopic: ${prompt}\nContext/Notes: ${context}`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        // Clean up markdown code blocks if present
        const jsonString = text.replace(/```json\n|\n```/g, "").trim();

        const data = JSON.parse(jsonString);
        return { data };

    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return { error: error.message || "Failed to generate content." };
    }
}
