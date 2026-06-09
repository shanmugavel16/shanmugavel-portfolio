'use server';
/**
 * @fileOverview An AI assistant flow to help draft compelling and concise descriptions for AI & IoT projects.
 *
 * - genAIProjectDescriptionAssistant - A function that generates project descriptions.
 * - GenAIProjectDescriptionAssistantInput - The input type for the genAIProjectDescriptionAssistant function.
 * - GenAIProjectDescriptionAssistantOutput - The return type for the genAIProjectDescriptionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenAIProjectDescriptionAssistantInputSchema = z.object({
  projectNotes: z
    .string()
    .describe(
      'Raw notes or details about an AI & IoT project from which to generate a description.'
    ),
});
export type GenAIProjectDescriptionAssistantInput = z.infer<
  typeof GenAIProjectDescriptionAssistantInputSchema
>;

const GenAIProjectDescriptionAssistantOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A compelling and concise summary or a highlight of key technical insights for the project.'
    ),
});
export type GenAIProjectDescriptionAssistantOutput = z.infer<
  typeof GenAIProjectDescriptionAssistantOutputSchema
>;

export async function genAIProjectDescriptionAssistant(
  input: GenAIProjectDescriptionAssistantInput
): Promise<GenAIProjectDescriptionAssistantOutput> {
  return genAIProjectDescriptionAssistantFlow(input);
}

const genAIProjectDescriptionPrompt = ai.definePrompt({
  name: 'genAIProjectDescriptionPrompt',
  input: {schema: GenAIProjectDescriptionAssistantInputSchema},
  output: {schema: GenAIProjectDescriptionAssistantOutputSchema},
  prompt: `You are an AI assistant designed to help Shanmugavel, an AI & IoT Developer, draft compelling and concise descriptions for his projects.

Your task is to take the provided raw project notes and generate a high-quality description, either as a summary or by highlighting key technical insights, suitable for a professional portfolio.

Focus on clarity, conciseness, and emphasizing the value and innovation of the project.

Project Notes:
---
{{{projectNotes}}}
---`,
});

const genAIProjectDescriptionAssistantFlow = ai.defineFlow(
  {
    name: 'genAIProjectDescriptionAssistantFlow',
    inputSchema: GenAIProjectDescriptionAssistantInputSchema,
    outputSchema: GenAIProjectDescriptionAssistantOutputSchema,
  },
  async input => {
    const {output} = await genAIProjectDescriptionPrompt(input);
    return output!;
  }
);
