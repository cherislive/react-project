import { push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
const authCheck = ({ getState }) => {
  return (next) => (action) => {
    if (action.payload !== undefined && action.payload.status === 401) {
      // history.push('login');
      push('login');
      console.log('session expired');
    }
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    return returnValue;
  }
}

export default authCheck;