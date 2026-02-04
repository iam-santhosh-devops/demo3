# ===========================
# Stage 1: Build Angular app
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

# Copy source code
COPY . .

# Build Angular for production
RUN npx ng build demo3 --configuration production

# ===========================
# Stage 2: Serve with Nginx
# ===========================
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output
COPY --from=build /app/dist/demo3/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
