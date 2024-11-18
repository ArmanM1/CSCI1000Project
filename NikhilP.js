export default function examplePage() {
    return (
      <div className='container'>
        <title>About Me - Nikhil Pudtha</title>
        <link rel='icon' href='/Downloads/Nikhil.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hi, I'm Nikhil Pudtha.</h1>
          </div>

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
    .page-container {
    min-height: 100vh;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f4f4f9;
    font-family: 'Arial', sans-serif;
    }

    main {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    }

    .page-title {
    margin: 0;
    font-size: 3rem;
    color: #333;
    font-weight: 700;
    }

    .highlight {
    margin-bottom: 2rem;
    border-bottom: 4px solid #0070f3;
    padding-bottom: 1rem;
    }

    .bio-description {
    font-size: 1.25rem;
    color: #555;
    line-height: 1.6;
    max-width: 75%;
    }

    .profile-image {
    height: 350px;
    width: 350px;
    border-radius: 50%;
    border: 5px solid #ddd;
    margin-top: 2rem;
    }

    .cta-button {
    padding: 12px 24px;
    background-color: #0070f3;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 2rem;
    transition: background-color 0.3s;
    }

    .cta-button:hover {
    background-color: #005bb5;
    }

    code {
    background: #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1.1rem;
    font-family: 'Courier New', Courier, monospace;
    }
`}</style>

<style jsx global>{`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #fafafa;
    color: #333;
  }

    *{
    box-sizing: border-box;
    }
    `}</style>

      </div>
    );
}
