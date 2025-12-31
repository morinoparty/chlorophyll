# スタイルの記述
- styleを記述する際は、panda-cssで記述してください。
- panda-cssのレシピを使用して、スタイルを記述してください。
- figma mcpからデザインを取得して、記述を求められた場合は、コード内にコメントを記述する量は最小限にしてください。
- また、figmaの方で色が指定してある場合であっても、theme/semantic-tokens/colors.tsにあるtokenをできるだけ使用してください。 
  - ex) var(--mpc-colors-bg-subtle)

# スタイリングの方法
- docs/ においては、panda-cssのsvaを使用してスタイルを記述してください。
- components/ においては、panda-cssのレシピを使用してスタイルを記述してください。

記述した後は、playwright mcpを利用してスクリーンショットを取得し、スタイルの確認を行ってください。サーバーはすでに5173番ポートで起動してるので、起動しようとしないでください。widthが1200px以下の場合は、widthを1200pxに設定してください。