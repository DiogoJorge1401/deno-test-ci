FROM denoland/deno:alpine as builder

WORKDIR /app

COPY src/ ./

RUN deno compile -A -o main main.ts


FROM denoland/deno

WORKDIR /app

COPY  --from=builder /app/main ./

CMD ["./main"]
