FROM denoland/deno:alpine AS builder

WORKDIR /app

COPY src/ ./

RUN deno compile -A -o server server.ts


FROM denoland/deno

WORKDIR /app

COPY  --from=builder /app/server ./

CMD ["./server"]
