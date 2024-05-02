import { Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function LoginPage() {
    return (
        <>
        <Authenticator>
        {({ signOut }) => (
          <main>
            <header className='App-header'>
              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
        </>
    )
}

export default withAuthenticator(LoginPage);