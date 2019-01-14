import path from "path";
import Koa from "koa";
import { promisify } from "util";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "src/components/App";

const app = new Koa();
const readFile = promisify(fs.readFile);

app.use(async (ctx) => {
  const htmlData = await readFile(
    path.resolve(__dirname, "..", "build", "index.html"),
    "utf8",
  );
  const initialState = await App.fetchData();
  const page = renderToString(<App data={initialState} />);

  ctx.body = htmlData.replace("page", page);
});

app.listen(3001);
