import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import router from "./router";
import toastState from "./recoil/toastState";
import Toast from "./components/atoms/Toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const { isVisible: isToastVisible } = useRecoilValue(toastState);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        {isToastVisible && <Toast />}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
