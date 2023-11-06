# Stage 1: Build the React Frontend
FROM node:18 as react-build
WORKDIR /workspace/frontend
COPY /workspace/frontend/package.json /workspace/frontend/package.json
COPY /workspace/frontend/package-lock.json /workspace/frontend/package-lock.json
RUN npm install
COPY /workspace/frontend/ /workspace/frontend/
RUN npm run build

# Stage 2: Build the FastAPI Backend
FROM python:3.11 as fastapi-build
WORKDIR /workspace/backend
COPY /workspace/backend/requirements.txt /workspace/backend/requirements.txt
RUN pip install --no-cache-dir -r /workspace/backend/requirements.txt
RUN pip install --upgrade pydantic
RUN pip install langchain pypdf pandas matplotlib tiktoken textract transformers openai faiss-cpu

# Stage 3: Create the Final Image
FROM python:3.11
WORKDIR /workspace

# Copy built React frontend from Stage 1
COPY --from=react-build /workspace/frontend/build /workspace/frontend

# Copy the installed Python packages from Stage 2
COPY --from=fastapi-build /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy your FastAPI application code
COPY /workspace/backend/ /workspace/backend/

# Expose ports (e.g., 8000 for FastAPI)
EXPOSE 8000

# Define the command to run your FastAPI application
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
