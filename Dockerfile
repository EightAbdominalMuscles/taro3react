# Dockerfile
FROM node:14
WORKDIR /app 
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 安装
RUN npm set registry https://registry.npm.taobao.org
RUN npm install -g @tarojs/cli
RUN npm install
RUN npm install pm2 -g

# 启动
CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev:h5 && npx pm2 log # 阻塞控制台的程序 

# 环境变量
ENV SERVER_NAME="TARO-3-REACT"
ENV AUTHOR_NAME="zhangyu"