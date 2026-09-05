import { createRoot } from "react-dom/client"
import {BrowserRouter} from 'react-router-dom'
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "@/components/ui/toast"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
      <Toaster/>
      </BrowserRouter>
    </ThemeProvider>

)
