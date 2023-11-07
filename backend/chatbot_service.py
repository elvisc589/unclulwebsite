from fastapi import Depends, HTTPException
from env import getenv
import pandas as pd
import matplotlib.pyplot as plt
from transformers import GPT2TokenizerFast
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.chat_models import ChatOpenAI


class ChatbotService:

    def __init__(self):
        # Load your API key from environment variables
        self.openai_api_key = getenv("OPENAI_API_KEY")
        # Load PDF and initialize chat history
        pdf_path = "data/UNC_LUL_DATA.pdf"
        self.loader = PyPDFLoader(pdf_path)
        self.pages = self.loader.load_and_split()
        self.chunks = self.pages
        self.embeddings = OpenAIEmbeddings()
        self.db = FAISS.from_documents(self.chunks, self.embeddings)
        self.qa_chain = load_qa_chain(ChatOpenAI(api_key=self.openai_api_key, model_name='gpt-3.5-turbo', temperature=0), chain_type="stuff")
        self.qa = ConversationalRetrievalChain.from_llm(ChatOpenAI(api_key=self.openai_api_key, model_name='gpt-3.5-turbo',temperature=0.1), self.db.as_retriever())
        self.chat_history = []


    def chatbot_reply(self, message):
        if message.lower() == 'exit':
            return "Thank you for using the State of the Union chatbot!"

        # Process the user's message
        result = self.qa({"question": message, "chat_history": self.chat_history})
        self.chat_history.append((message, result['answer']))
        
        return result['answer']

    def get_initial_response(self):
        return "Welcome to the Transformers chatbot! Type 'exit' to stop."

chatbot_service = ChatbotService()