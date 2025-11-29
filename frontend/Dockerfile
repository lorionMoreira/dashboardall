# --- Stage 1: Base (Shared configuration) ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./

# --- Stage 2: Development ---
FROM base AS dev
# Install all dependencies (including devDependencies like Vite)
RUN npm install
# Copy source code
COPY . .
# Expose Vite port
EXPOSE 5173
# Start dev server on 0.0.0.0 so host can access it
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# --- Stage 3: Builder (Compiles the React app) ---
FROM base AS builder
# Install dependencies (frozen-lockfile is faster/safer for builds)
RUN npm ci
COPY . .
# Build the static files (Output goes to /app/dist)
RUN npm run build

# --- Stage 4: Production (Nginx) ---
FROM nginx:alpine AS prod

WORKDIR /usr/share/nginx/html/dashboard
# Copy the built files from the 'builder' stage to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html/dashboard
# Copy custom Nginx config (created in step 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]