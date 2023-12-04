This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
npm run node
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For deployment on hardware without internet access,
 * Run `npm run i && npm run build`.
 * The build is created in the `.next` folder.
 * Copy the `standalone` folder from `.next` folder.
 * Copy the `static` folder from `.next` into `standalone`.
 * Copy the `server.js`, `package.json` & `next-config.js` from root folder into `standalone` folder.
 * Create another folder with `pacakge.json` containing only `express`, `next`, `socket.io` & `socket.io-client` & run the command `npm i`.
 * Copy the `node_modules` folder & move to `standalone` folder.
 * Run the command `tar -czvf standalone.tar.gz` to compress the folder.
 * Copy to server for deployment.
 * Run the command `tar -xzvf standalone.tar.gz` to extract the code.
 * Run the command `npm run node`.
