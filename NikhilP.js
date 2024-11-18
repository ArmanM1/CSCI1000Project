export default function examplePage() {
    return (
      <div className='container'>
        <title>About Me - Arman Mokhlesi</title>
        <link rel='icon' href='/Downloads/Arman.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hi, I'm Arman Mokhlesi.</h1>
          </div>
          <img
            className='pic'
            src='https://media.licdn.com/dms/image/v2/D5603AQG1N7PrOxUp7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696374984556?e=2147483647&v=beta&t=8hg0dUE1iWPCObPsBC3n74dF164-N_3YJ9-Yyk8xZFQ'
            alt='Arman Mokhlesi'
          />

          <p className='description'>
            I'm Nikhil Pudtha, an undergraduate student studying Computer Science at the University of 
            Colorado Boulder. I'm deeply interested in artificial intelligence and data science.
            Currently, I'm learning c++ and java. I have worked on projects that use c# and unity. In my free time, I enjoy playing sports with my friends and reading about the latest technology.
            
        
          </p>

          <a className='button' href='/'>
            <p>Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
