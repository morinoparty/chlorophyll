# 🌿 Chlorophyll 🌿

> [!WARNING]
> This project is currently under development.

## ✨ About the Project
Chlorophyll is a modern and user-friendly UI component library built with React and TypeScript.

## 🛠 Tech Stack
- 🎨 **Language**: TypeScript
- ⚛️ **Framework**: React
- 🎯 **CSS Library**: PandaCSS
- 🎭 **Headless Library**: Ark UI

## 🚀 Setting Up the Development Environment

### 🎯 Check UI Components
```bash
pnpm run dev
```

## 🧪 Testing

### Install dependencies
```bash
pnpm dlx playwright install --with-deps
```

### 🎯 Check UI Components
```bash
pnpm run test:runner
```

### 🎯 Check VRT
```bash
pnpm run test:vrt
```


## 📦 Installation

1. Install PandaCSS

[Getting Started - PandaCSS](https://panda-css.com/docs/overview/getting-started#framework-guides)

2. Install React Aria
```bash
pnpm add 

3. Install the Panda Preset
```bash
pnpm add @ark-ui/react
```

```ts
import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@moripa/chlorophyll-preset'
import mori from '@moripa/chlorophyll-preset/colors/accent/mori'
import stone from '@moripa/chlorophyll-preset/colors/base/stone'

export default defineConfig({
  preflight: true,
  presets: [createPreset({ accentColor: mori, grayColor: stone, radius: 'sm' })],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
```

4. Path alias
tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@ss/*": ["./styled-system/*"]
    }
  }
}
```

5. Add your first component
```bash
pnpm dlx @moripa/chlorophyll-cli add button
```

## 📖 Usage
```tsx
import { Button } from '@moripa/chlorophyll';

function App() {
  return (
    <Button>Click me!</Button>
  );
}
```

[token](https://946d07e9-color-palette.nikomaru.workers.dev/?min=0.1&max=0.98&length=15&chroma=0.085&data=[{%22colorValue%22%3A%22rgba(73%2C+139%2C+108%2C+1)%22%2C%22colorId%22%3A%22mori%22%2C%22uniqueId%22%3A1}%2C{%22colorValue%22%3A%22rgba(59%2C+149%2C+155%2C+1)%22%2C%22colorId%22%3A%22umi%22%2C%22uniqueId%22%3A2}])

## 🤝 Contribution
Contributions are welcome! Follow these steps to participate:

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Create a pull request

---
Made with 💚 by Morino party team