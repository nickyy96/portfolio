import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>nicky's portfolio</title>
        <Head>
          <script src="/theme.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&family=Urbanist:wght@100;400&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          {/* some sources placed script inside body, before Main, but I experienced flashing */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;