import { AppRouter } from "./router/AppRouter"
import { ThemeJournal } from "./theme"

export const JournalApp = () => {
  return (
    <ThemeJournal>
        <AppRouter/>
    </ThemeJournal>
  )
}
