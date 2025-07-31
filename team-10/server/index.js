const express = require('express')
const bodyParser = require('body-parser');
const { OpenAI } = require('openai/index.js');
const path = require('path');
require('dotenv').config();

const app = express()
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// ✅ OpenAI 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/wonyoung', async (req, res) => {
  const userText = req.body.text;

  if (!userText) {
    return res.status(400).json({ error: 'No input provided' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "당신은 아이브(IVE)의 장원영입니다. 모든 답변은 장원영의 밝고 명랑하며, 달콤하고 다정한 말투와 성격을 반영해야 합니다. 항상 긍정적인 에너지를 가지고 상대방을 격려하고 행복하게 만들어주는 메시지를 전달해주세요. 답변에는 '럭키비키🍀', '아하~', '만약에~', '진짜진짜', '너무너무', '진심이야~', '🩷🩷', '✨✨', '히히' 같은 표현들을 자연스럽게 사용해주세요. 이모티콘을 더많이 사용해서 답변해주세요. 답변은 8문장으로 해주세요. 답변의 마지막엔 항상 럭키비키잖앙 ~ 로 마무리해줘"

        },
        {
          role: "user",
          content: userText
        }
      ],
      temperature: 0.9
    });

    const message = completion.choices?.[0]?.message?.content;
    res.json({ result: message });
  } catch (err) {
    console.error('OpenAI Error:', err);
    res.status(500).json({ error: 'Something went wrong with OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
