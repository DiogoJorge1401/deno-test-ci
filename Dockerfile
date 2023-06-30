FROM denoland/deno

WORKDIR /app

COPY math.ts .

RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]


