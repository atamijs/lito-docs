const e=`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>lito</title>\r
  </head>\r
  <body>\r
    <!-- 使用组件 -->\r
    <led-marquee\r
      text="この電車は特急LITO６９号伊東ゆきです。途中：品川、熱海に停車いたします。次の停車駅は熱海です。This is the limited express train No.６９ for Ito.The next station is Atami(熱海) JT-20."\r
      speed="0.25"\r
      color="#4CAF50"\r
      background="#000"\r
      size="medium"\r
      direction="left"\r
    ></led-marquee>\r
    <led-marquee\r
      text="下一站 海淀黄庄，乘客可换乘地铁10号线。 The next station is Haidianhuangzhuang transfer station for line 10."\r
      speed="0.25"\r
      color="#4CAF50"\r
      background="#000"\r
      size="medium"\r
      direction="left"\r
    ></led-marquee>\r
  </body>\r
</html>\r
<script type="module" src="https://unpkg.com/@atami/lito@1.0.6/dist/index.v1.0.4.js">\r
<\/script>\r
`;export{e as T};
