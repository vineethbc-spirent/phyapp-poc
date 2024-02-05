This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
npm run standalone
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For deployment on hardware without internet access,
 * Run `npm run i && npm run standalone`.
 * Copy the `standalone` folder from `.next` folder.
 * Run the command `tar -czvf standalone.tar.gz` to compress the folder.
 * Copy to server for deployment.
 * Run the command `tar -xzvf standalone.tar.gz` to extract the code.
 * Run the command `node server.js` from inside standalone folder to start the server.
