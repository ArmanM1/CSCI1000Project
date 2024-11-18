export default function AboutPage() {
    return (
      <div className='wrapper'>
        <head>
          <title>Ayub Ahmed</title>
          <link rel='icon' href='/assets/Ayub.ico' />
        </head>

        <main>
          <section className='header'>
            <h1 className='headline'>Hello, I'm Ayub Ahmed.</h1>
          </section>
          <img
            className='profile-pic'
            src='https://media.licdn.com/dms/image/v2/D5603AQHpGG0higK8Sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724714242330?e=1737590400&v=beta&t=IxlIRb40BCtWsXXemhzuQFAGzJMNE89LvoiMPGK8q0Y'
            alt='Ayub Ahmed'
          />

          <p className='bio'>
            I'm Ayub Ahmed, a Computer Science undergrad at the University of 
            Colorado Boulder. My interests include web development, solving challenging 
            puzzles, and being outdoors.
            My projects range from developing intuitive web applications to using APIs 
            creatively. Recently, I've been focused on learning more about robotics, 
            machine learning, and system architecture. When I'm not coding, I enjoy 
            staying up-to-date with tech trends, reading, and skiing.
          </p>

          <a className='return-link' href='/'>
            <p>Go to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .wrapper {
            height: 100vh;
            padding: 0 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 960px;
            margin: 0 auto;
          }

          main {
            padding: 4rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .headline {
            margin: 0;
            font-size: 3.5rem;
            font-weight: bold;
            line-height: 1.2;
          }

          .header {
            margin-bottom: 2rem;
          }

          .bio {
            font-size: 1.25rem;
            line-height: 1.8;
            margin: 1rem 0;
            max-width: 800px;
          }

          .profile-pic {
            height: 300px;
            width: 300px;
            border-radius: 50%;
            margin-bottom: 1rem;
          }

          .return-link {
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            text-decoration: none;
            border: 2px solid #0070f3;
            border-radius: 8px;
            color: #0070f3;
            font-size: 1rem;
            font-weight: 600;
            transition: background 0.2s, color 0.2s;
          }

          .return-link:hover {
            background: #0070f3;
            color: #fff;
          }
        `}</style>

        <style jsx global>{`
          html, body {
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
