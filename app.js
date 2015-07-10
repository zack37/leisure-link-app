import React from 'react'
import Router from 'react-router'
import routes from './src/infrastructure/routes'

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('main-content'));
});
