import {API} from 'aws-amplify';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {Frame1} from './ui-components';
import axios from 'axios';

function App() {

 async function getItemsAmplify(){
    const items = await API.get('amplifydemoapi', '/items')
    console.log(items)
  }
  async function getItemsServerless(){
    axios.get('https://508az47349.execute-api.ap-northeast-1.amazonaws.com/dev/healthcheck')
    .then(function (response) {
      // handle success
      console.log(response);
    })
  }
  return (
    <div>
      <Frame1></Frame1>
      <div>       
        <button onClick={getItemsAmplify}>amplify送信</button>
      </div>
      <div>       
        <button onClick={getItemsServerless}>Serverless Framework送信</button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
