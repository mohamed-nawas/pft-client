require('dotenv').config();
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ErrorBoundary from "@components/ErrorBoundary";
import Routes from '@routes/Routes';
import "@scss/_index.scss";
import { store } from "@redux/store";

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ErrorBoundary>
)