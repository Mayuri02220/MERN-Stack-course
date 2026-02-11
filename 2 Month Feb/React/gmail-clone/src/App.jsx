import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {

  return (
    <>
      <div className="gmail-container">
        {/* header */}

        <header className='gmail-header border-bottom'>
          <div className="d-flex">
            <button className="btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#5f6368"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>

            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt="gmail-img" />
          </div>

          <InputGroup className="header-search mx-auto">
            <InputGroup.Text id="basic-addon1" className="bg-transparent border-0">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="#5f6368"
                d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z" />
            </svg>
            </InputGroup.Text>
            <Form.Control
               className="bg-transparent border-0"/>

            <InputGroup.Text id="basic-addon1" className="bg-transparent border-0">
           <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup>

          <div className="d-flex align-items-center">
            <button className="btn">
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                />
              </svg>
            </button>
            <button className="btn">
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
                />
                <circle fill="#5f6368" cx="12" cy="12" r="3.5" />
              </svg>
            </button>
            <button className="btn">
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </button>
            <div
              className="profile-icon rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              M
            </div>
          </div>
        </header>

        <div className='container-fluid'>
          <div className='row'>
            {/* side bar */}
            <div className='col-md-3'>
            </div>

            {/* main content */}
            <div className='col-md-9'>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App;
