# Prodwarn

ProdWarn is a browser extension designed to prevent such costly mistakes. It alerts you with a clear warning whenever you’re working in a production environment, helping you stay aware and cautious before making any critical changes.

Install ProdWarn today to work safely and keep your production system secure! 🚀

## Development

First, run the development server:

```bash
bun run dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`. You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes.

For further guidance, [visit Plasmo Docs](https://docs.plasmo.com/).

## Making production build

Run the following:

```bash
bun run build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## References

- [Plasmo docs](https://docs.plasmo.com)
- [daisyUI](https://daisyui.com/docs/use/)
