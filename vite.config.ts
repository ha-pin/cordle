import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from "unocss/vite"
import presetWind from "@unocss/preset-wind"
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Unocss({
        presets: [
            presetWind()
        ],
        transformers: [transformerDirective()]
    })]
})
