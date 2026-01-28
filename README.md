This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Idea

You create 6 separate panels (HTML elements), one for each face of the cube. Each panel contains text like "Chapter 03 - Work" and sits in the exact same spot on the page, stacked on top of each other.
You tell the browser to treat the container as a 3D space (not just flat)
Each of the 6 panels gets rotated and pushed outward to form cube faces:
Front face: Don't rotate it, just push it forward
Back face: Rotate 180° horizontally, push it backward
css:
Left face: Rotate 90° left, push it sideways
Right face: Rotate 90° right, push it sideways
Top face: Rotate 90° up, push it upward
Bottom face: Rotate 90° down, push it downward
The "push" distance is half the cube's size, so all faces connect perfectly to form a cube.

You also set backface-visibility to hidden so you don't see the back of panels when they face away from you.

When the user scrolls:

Calculate how far they've scrolled through the content
Rotate the entire cube based on scroll position
For example:
0% scrolled = show front face (0° rotation)
33% scrolled = rotate to right face (90° rotation)
66% scrolled = rotate to back face (180° rotation)
100% scrolled = complete the rotation
The rotation is smooth and tied to scroll position - if they scroll halfway between two chapters, the cube is halfway rotated between those two faces.
and add a snapping effect so that if the user stops halfway mid rotation the cube will automatically rotate to the nearest complete face rather than stopping at an awkward angle.
and then play with the background to fit the chapter/ side