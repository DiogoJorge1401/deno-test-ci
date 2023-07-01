FROM denoland/deno:alpine AS builder

WORKDIR /app

COPY src/ ./

RUN deno compile -A -o main main.ts


FROM denoland/deno

WORKDIR /app

COPY  --from=builder /app/main ./

CMD ["./main"]
