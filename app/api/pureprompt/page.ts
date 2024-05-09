import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { OpenAI } from 'openai'; // Removed ChatCompletion import
import {error} from "console"


// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(',') : ['*'];
const cors = Cors({
  origin: whitelist
});

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey || '',
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise<void>((resolve, reject) => {
    if (fn.orgin && fn) {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve();
      });
    } else {
      reject(new Error('Middleware function is not defined'));
    }
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  if (!apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const { prompt = '', temperature, maxtokens } = req.body;

  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid prompt",
      }
    });
    return;
  }

  const temperatureValue = parseFloat(temperature as string);
  const maxTokensValue = parseInt(maxtokens as string, 10);

  console.log('User prompt:', prompt);
  console.log('temperature:', temperature)
  console.log('maxtokens:', maxtokens)

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": `${prompt}`
        }
      ],
      temperature: temperatureValue,
      max_tokens: maxTokensValue
    });
    console.log(completion);
    console.log("Sent: " + completion.choices[0].message.content);
    res.status(200).json({ code: completion.choices[0].message.content });
  } catch (error:any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.'
        }
      });
    }
  }
}