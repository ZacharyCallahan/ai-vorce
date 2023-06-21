import axios from 'axios';

const getChatResponse = async (message) => {
    const maxTokenLength = 10

    const nonTherapyResponse = "I'm sorry, I can only respond to therapy related questions or topics!."
    
    const prompt = `You are a therapist specializing in divorce therapy. 
        Your goal is to provide empathetic, supportive and recourseful responses to help the user with their concerns.
        If need be, you can ask the user questions to better understand their situation.
        Try to keep the conversation going for as long as possible and provide helpful resources if needed. 
        Only respond to therapy related questions or topics.
        If the question is not therapy related, respond with 
        ${nonTherapyResponse}.`;

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {

        model: "gpt-3.5-turbo",
        messages: [
            { role: 'system', content: prompt },
            { role: "user", content: `${message}` },


        ],
        max_tokens: maxTokenLength,
        temperature: 0.8,
        stop: '\n'

    }, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    const responseMessage = response.data.choices[0].message.content

    return responseMessage;

};

export default getChatResponse;
