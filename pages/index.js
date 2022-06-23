import Header from "../components/header";
import { Container } from "@chakra-ui/react";

const Home = () => {
    return (
        <div className="container">
        <Header title="index" />
        <h1 className="title">
            HELLO <awesome>THERE</awesome><br></br>
            <notimplemented>Home is not implemented</notimplemented>
        </h1>
        <div className="grid">
            <a href="/about" className="card">
                <h3>About &rarr;</h3>
                <p>Go to the about page</p>
            </a>
            <a href="/projects" className="card">                  <h3>Projects &rarr;</h3>
                <p>Visit all my projects</p>
            </a>
        </div>
        <style jsx>{`
          awesome {
            color: inherit;
            text-decoration: none;
            animation: color-change 10s infinite;
          }
          @keyframes color-change {
            0% { color: orange; }
            25% { color: yellow; }
            50% { color: blue; }
            75% { color: pink; }
            100% { color: purple; }
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 10rem;
          }
          .title,
          .description {
            text-align: center;
          }
          notimplemented {
            text-align: center;
            font-size: 2rem;
          }
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
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

export default Home;
