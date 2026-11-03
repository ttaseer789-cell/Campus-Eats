# Campus Eats - HCI Lab 07 (Figma to Website)

Responsive landing page generated from a Figma design (Navbar, Hero + CTA, 6-card feature grid, Contact form, Footer) using semantic HTML5 and Tailwind CSS.

- Figma file: https://www.figma.com/design/BUiuU0H2bf3nCmdCCCDQNz (set sharing to "anyone with the link can view")
- Live site: _add your GitHub Pages / Vercel / Netlify URL here_

## Figma -> code workflow
1. Figma MCP server configured in `.vscode/mcp.json` / `.cursor/mcp.json` (remote endpoint `https://mcp.figma.com/mcp`).
2. Tokens were read with `get_variable_defs` on the desktop frame and mapped to `tailwind.config.js`:
   `color/primary #15803D`, `color/ink #0F172A`, `color/muted #475569`, `color/tint #DCFCE7`, `color/surface #F1F5F9`, `color/border #E2E8F0`, `space/lg 32` (grid gap).
3. Figma Auto Layout -> flexbox/grid, Fill -> `w-full`/`flex-1`, Hug -> content width, Wrap -> responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

## Run locally
```bash
npm install
npm run build     # compiles dist/output.css
# then open index.html (or: npx serve .)
```

## Responsiveness / HCI checks
- Breakpoints: 375 (mobile), 768 (tablet, `md:`), 1440 (desktop, `lg:`). No absolute positioning for layout.
- Landmarks: `header`, `nav`, `main`, `section`, `footer`; native `a`, `button`, `input`, `textarea`.
- Hover and `focus-visible` styles on every link, button and field; skip link; `label for=` bound to each input.
- Hero illustration is an SVG with `role="img"` and a descriptive `aria-label`; decorative icons are `aria-hidden`.

## Deploy (GitHub Pages)
```bash
git init && git add . && git commit -m "Lab 07: Campus Eats website"
git branch -M main
git remote add origin https://github.com/<your-username>/lab07-campus-eats.git
git push -u origin main
```
Then GitHub repo -> Settings -> Pages -> Source: `main` / root. (`dist/output.css` is committed so Pages works without a build step.)
