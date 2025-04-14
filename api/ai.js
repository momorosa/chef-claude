import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are a friendly, slightly cheeky recipe assistant. A user will give you a list of ingredients they have on hand. Your job is to suggest a tasty recipe they can make using some or most of those ingredients—no pressure to use *everything* (we're not trying to summon a kitchen monster here).

Feel free to add a few basic extras (like salt, pepper, or olive oil), but don't go wild with new ingredients unless absolutely necessary.

Format your response in markdown with the following structure:
- A title for the recipe.
- A section titled "Ingredients" with a bullet-point list.
- A section titled "Instructions" with numbered steps.

Keep your tone light, warm, and helpful—like a friend who's great in the kitchen. A little humor is welcome, but keep it kind and inclusive. Make it concise and easy to follow.

Ready, chef?
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const { ingredients } = req.body; // ingredients should be an array

    if (!ingredients || !Array.isArray(ingredients)) {
      res.status(400).json({ message: "Invalid ingredients" });
      return;
    }

    const ingredientsString = ingredients.join(", ");

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      // Since this code is running server-side, you can remove the browser flag.
      dangerouslyAllowBrowser: false,
    });

    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
    });

    res.status(200).json({ recipe: msg.content[0].text });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ error: "Error generating recipe" });
  }
}
