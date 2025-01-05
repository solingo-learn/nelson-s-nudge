# Supabase Edge Functions

## Nelson Chat Function

This function handles the AI chat functionality for Nelson's Nudge.

### Environment Variables

You need to set the following environment variables in your Supabase project:

- `AI_API_KEY`: Your AI provider API key (OpenAI, Anthropic, or any OpenAI-compatible API)
- `AI_API_URL`: (Optional) The API endpoint URL. Defaults to OpenAI's endpoint if not provided.

### Supported AI Providers

- **OpenAI**: Use `https://api.openai.com/v1/chat/completions`
- **Anthropic**: Use their Claude API endpoint
- **Any OpenAI-compatible API**: Provide your custom endpoint

### Setup

1. Go to your Supabase project settings
2. Navigate to Edge Functions → Secrets
3. Add your `AI_API_KEY`
4. (Optional) Add your custom `AI_API_URL` if not using OpenAI

### Model Configuration

The function currently uses `google/gemini-3-flash-preview`. You can modify this in the code to use any model supported by your AI provider:

```typescript
model: "gpt-4" // or any other model
```
