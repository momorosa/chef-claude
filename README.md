# 🧑‍🍳 Chef Claude
Chef Claude is an AI-powered recipe assistant that takes the guesswork and mental load out of weeknight cooking. Simply enter a few ingredients you have at home, and Claude will whip up a recipe suggestion, sometimes with a dash of humor! 

This project was built as a way to practice building full-featured UIs using React and deploying serverless applications via Vercel, while integrating Anthropic's Claude API for AI-powered text generation.

## ✨ Features

• Input Validation – No invisible or blank ingredients allowed

• Non-edible Item Handling – Claude recognizes non-edible items and responds playfully

• Animated Loading Spinner – Smooth feedback while waiting for AI response

• Favorite Button – Like your favorite recipes with a heart animation ❤️

• Start New Recipe – Clear the ingredients and recipe to start fresh

• Deployed Serverless – Hosted on Vercel

## 🤖 Tech Stack

• React (Frontend UI)
• Vercel (Serverless Deployment)
• Anthropic Claude API (AI Recipe Generation)
• React Markdown (Render recipes nicely)
• Custom React Hook (Claude's rotating loading messages)
• CSS3 (Styling and animations)

## 🎯 Project Goals

• Move beyond CLI-based AI projects to intuitive web-based experiences
• Learn modular React development practices
• Practice serverless deployment with Vercel
• Build faster, low-friction prototypes that people enjoy using

## 🖥️ Demo

Because this project uses a private API key for Anthropic's Claude, the live link is not publicly available.
👉 [Click here to watch the video demo!](https://vimeo.com/1078803467?share=copy#t=0)

## 🚀 Getting Started (For Developers)

> **Note:** Due to private API key usage, this app cannot be fully cloned and run without setting up your own Anthropic API key.

1. Clone the repo:
<pre> ```zsh # clone the repo git clone https://github.com/yourusername/chef-claude.git cd chef-claude ``` </pre>

2. Install dependencies:
<pre> ```zsh # install dependencies npm install ``` </pre>

3. Create a .env file at the project root and add your API key:
<pre> ```zsh # ANTHROPIC_API_KEY=your-api-key-here ``` </pre>

4. Run the development server:
<pre> ```zsh # run the dev server npm run dev ``` </pre>

5. Open http://localhost:5173 in your browser to view it.

### 💛 Acknowledgement
• Built while learning React with Bob Ziroll’s [Scrimba Learn React] (https://scrimba.com/learn-react-c0e)

