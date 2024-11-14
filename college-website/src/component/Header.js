import './Header.css';

function Header() {
  return (
    <header>
      <h1>College Name</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
        </ul>
      </nav>
    </header>
  );
}
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import CoursesPage from './CoursesPage';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/courses" component={CoursesPage} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }