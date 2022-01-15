import SearchIcon from '@mui/icons-material/Search';
import './Search.scss';
export default function SearchComponent() {
  return (
    <form className="form_comp">
      <input
        type="search"
        className="sidebar__section__header__search header__search"
        name="search"
        placeholder="Search products"
      />
      <button className="sidebar__section__search__button">Search</button>
      <SearchIcon className="icon" />
    </form>
  );
}
