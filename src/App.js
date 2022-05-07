import {API, Amplify} from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
Amplify.configure(config)

function App() {
 async function getItems(){
    const items = await API.get('amplifydemoapi', '/items')
    console.log(items)
  }
  return (
    <div>
      <AmplifySignOut/>
      <button onClick={getItems}>送信</button>
    </div>
  );
}

export default withAuthenticator(App);
