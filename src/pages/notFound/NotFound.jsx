import './notFound.scss';
import HomeIcon from '@mui/icons-material/Home';
// import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div className="notFound">
      <h1>404!</h1>
      <h3>Sorry, Page not found</h3>
      <p>
        This page you are looking for might have been removed, had its name
        changed or is currently Unavailable
      </p>
      <Link to="/" className="link">
        <button>
          <HomeIcon className="icon" /> Go to Home
        </button>
      </Link>
    </div>
  );
}

export default Notfound;
