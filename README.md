
# GPT-3 app script for Google Sheets
This app script allows you to access the GPT-3 API from within a Google Sheet, using the formula `=GPT(prompt, max_tokens)`. The `prompt` parameter is the text that you want to send to the GPT-3 API, and the `max_tokens` parameter (optional, default value: 64) is the maximum number of tokens to generate in the response.

## Getting started
1. Make sure you have a Google account and access to Google Sheets.
2. Obtain an **API key for the GPT-3 API**. You will need to sign up for an OpenAI account and request access to the GPT-3 API. Follow the instructions in the OpenAI API documentation to obtain an API key.
3. Open the Google Sheet where you want to use the GPT-3 app script.
4. In the Google Sheet, go to the **Tools** menu and select **Script editor**. This will open the script editor in a new tab.
5. In the script editor, copy and paste the code from **Script.js**
6. Replace `YOUR_API_KEY` with your actual API key.
7. Save the script by going to the **File** menu and selecting **Save**.
8. Return to the Google Sheet, and you should now be able to use the `GPT` formula to access the GPT-3 API.

To use this function in your Google Sheet, you can enter the formula `=GPT(prompt)`, where `prompt` is the text that you want to send to the GPT-3 API. For example, `=GPT("Write a short story about a group of friends on a road trip.")` would return a generated response based on the given prompt. For longer responses you can enter the formula `=GPT("Write a short story about a group of friends on a road trip.", 128)` to generate a response with a maximum of 128 tokens.

**Keep in mind that the GPT-3 API has rate limits and usage quotas**, so you may need to consider how you want to handle requests that exceed these limits in your app script. You can find more information about these limits and how to manage them in the OpenAI API documentation.

## Examples
Here are a few example prompts that you can use with the `GPT` formula:
```
=GPT("What is the capital of France?")
=GPT("Tell me a joke.")
=GPT("Generate a recipe for a vegan chili.", 30)
=GPT("Write a poem about love.", 40)
```

## Why using Google Sheets?
There are several benefits to using the `GPT` formula inside a Google Sheet, in combination with other cells. Some of these benefits include:
-   **Automation**: By using the `GPT` formula in a Google Sheet, you can automate the process of generating responses from the GPT-3 API. For example, you can set up a Google Sheet that generates responses for a set of prompts, and the responses will be updated automatically whenever the sheet is opened or refreshed.
-   **Data integration**: You can use the `GPT` formula in combination with other cells to integrate data from the GPT-3 API with other data in your Google Sheet. For example, you could use the `GPT` formula to generate responses based on data from other cells, or use data from other cells to customize the prompt that is sent to the GPT-3 API.
-   **Collaboration**: Google Sheets is a collaborative tool, which means that you can share your sheet with others and work on it together in real-time. By using the `GPT` formula in a shared Google Sheet, you can enable other users to access the GPT-3 API and generate responses from within the sheet.
-   **Customization**: You can customize the `GPT` formula to suit your specific needs by specifying the `max_tokens` parameter and adjusting other parameters in the payload. This allows you to control the length and content of the generated responses to meet your specific requirements.

Here are a few examples of how you can use cells inside the prompt in the `GPT` formula:
- **Personalized responses**: You can use data from cells to personalize the prompt and generate customized responses. For example, you could use the following formula to generate a personalized greeting based on the name of the person in cell `A1`: `=GPT("Write a greeting for " & A1 & "!", 10)`
- **Dynamic prompts**: You can use cells to create dynamic prompts that change based on the data in the cells. For example, you could use the following formula to generate a response based on the topic in cell `A1`: `=GPT("Write a short article about " & A1)`
- **Conditional prompts**: You can use cells and logical functions to create conditional prompts that change based on certain conditions. For example, you could use the following formula to generate a response based on the value in cell `A1`: `=GPT(IF(A1>5, "Write a short story about a magical adventure", "Write a short story about a day in the life"))`
