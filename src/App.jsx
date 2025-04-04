import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLAyout";
import MainPage from "./pages/MainPage";
import Country from "./pages/Country";
import { CountryContext } from "./contexts/CountryContext";
import { ThemeContext } from "./contexts/ThemeToggle";

function App() {
  return (
    <>
      <CountryContext>
        <ThemeContext>
          {" "}
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="country" />} />
                <Route path="country" element={<MainPage />} />
                <Route path="/:name" element={<Country />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </CountryContext>
    </>
  );
}

export default App;
