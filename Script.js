// Replace YOUR_API_KEY with your actual API key
var API_KEY = 'YOUR_API_KEY';

/**
 * Returns the response from the GPT-3 API for the given prompt.
 *
 * @param {string} prompt The prompt to send to the GPT-3 API.
 * @param {number} [max_tokens = 64] The maximum number of tokens to generate in the response.
 * @return {string} The response from the GPT-3 API.
 * 
 * Full credit to ChatGPT that created this script on my behalf ;-)
 *  
 */
function GPT(prompt,max_tokens = 64) {
  // Set up the API URL and payload
  var API_URL = 'https://api.openai.com/v1/completions';
  var payload = {
    'prompt': prompt,
    'model': 'text-davinci-003',
    'max_tokens': max_tokens,
    'top_p': 1,
    'frequency_penalty': 0,
    'presence_penalty': 0
  };

  // Make the API request
  var response = UrlFetchApp.fetch(API_URL, {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY
    },
    'payload': JSON.stringify(payload)
  });

  // Parse the response and return the generated text
  var responseText = response.getContentText();
  var responseJson = JSON.parse(responseText);
  return responseJson['choices'][0]['text'];
}
