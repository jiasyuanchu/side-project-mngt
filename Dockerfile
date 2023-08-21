FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 來安裝相依模組
COPY package*.json ./
RUN npm install

# 複製應用程式檔案到容器內
COPY app.js .

# 定義容器執行指令
CMD ["node", "app.js"]
