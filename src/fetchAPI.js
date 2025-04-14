export async function fetchRecipe(ingredients) {
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });
      const data = await response.json();
      return data.recipe;
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }
  