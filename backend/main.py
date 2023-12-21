from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from chatbot_service import ChatbotService
from pydantic import BaseModel
class ChatMessage(BaseModel):
    message: str

app = FastAPI()
origins = ["http://localhost:"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chatbot_service = ChatbotService()

@app.post("/api/chatbot")
def chat_with_bot(message: ChatMessage):
    response = chatbot_service.chatbot_reply(message.message)
    return {"response": response}
