# Getting started with the GPT-3 app script for Google Sheets
This app script allows you to access the GPT-3 API from within a Google Sheet, using the formula =GPT(prompt, max_tokens). The prompt parameter is the text that you want to send to the GPT-3 API, and the max_tokens parameter (optional, default value: 64) is the maximum number of tokens to generate in the response.

To get started, follow these steps:

1. Make sure you have a Google account and access to Google Sheets.
2. Obtain an API key for the GPT-3 API. You will need to sign up for an OpenAI account and request access to the GPT-3 API. Follow the instructions in the OpenAI API documentation to obtain an API key.
3. Open the Google Sheet where you want to use the GPT-3 app script.
4. In the Google Sheet, go to the Tools menu and select Script editor. This will open the script editor in a new tab.
5. In the script editor, copy and paste the following code from the Script.js file in this repository

Replace YOUR_API_KEY with your actual API key.

Save the script by going to the File menu and selecting Save.

To use this function in your Google Sheet, you can enter the formula =GPT(prompt), where prompt is the text that you want to send to the GPT-3 API. For example, =GPT("Write a short story about a group of friends on a road trip.") would return a generated response based on the given prompt. For longer responses you can enter the formula =GPT("Write a short story about a group of friends on a road trip.", 128) to generate a response with a maximum of 128 tokens.

Keep in mind that the GPT-3 API has rate limits and usage quotas, so you may need to consider how you want to handle requests that exceed these limits in your app script. You can find more information about these limits and how to manage them in the OpenAI API documentation.
