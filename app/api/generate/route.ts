import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// export const runtime = "edge";

export async function POST(req: Request): Promise<any> {
  let { competition, level, name } = await req.json();
  // remove trailing slash,
  // slice the content from the end to prioritize later characters
  // content = content.replace(/\/$/, "").slice(-5000);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Você é um professor do ensino fundamental e vai aplicar um simulado do PISA para os alunos, preciso que você crie uma questão criativa 
         para a matería de ${competition} do nivel ${level} sendo 5 o mais dificil e 1 o mais facil, devolvendo um JSON com 4 alternativas, as perguntas deverão ser elaboradas contando uma estoria de um jovem aventureiro com o nome ${name} e no final a questão a ser resolvida, devolva isso em um json no formato de exemplo : { ask: '', alternatives: [{ label: '5', value: 'A', check: false}]  
         `,
      },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
