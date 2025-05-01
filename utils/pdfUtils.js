export const createHTMLContent = (imageUri) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Output</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <h1>Generated PDF</h1>
      <p>This PDF includes your selected image:</p>
      <img src="${imageUri}" />
    </body>
  </html>
`;
