"use strict";

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import App from "./app";
import configureStore from "./redux-flow/configure-store";
// import { db } from "./config/firebase";
// import { onValue, ref, set, update } from "@firebase/database";

const store = configureStore();
// const videos = ref(db, "videos");

//

// set(videos, {
//   id: 5555,
//   title: "titulo",
// });

// const updates = {};
// updates["videos"] = { id: 6666, title: "titulo 2" };
// update(videos, updates);

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    renderApp(NextApp);
  });
}
