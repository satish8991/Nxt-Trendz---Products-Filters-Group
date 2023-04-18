import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearchResult,
    updateCategoryId,
    updateRatingId,
    clearFilter,
    titleSearch,
  } = props
  const onChangeInput = event => {
    updateSearchResult(event.target.value)
  }
  const categoryClicked = event => {
    updateCategoryId(event.target.value)
  }
  const ratingClicked = event => {
    updateRatingId(event.target.value)
  }
  const clearCliked = () => {
    clearFilter()
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="input"
          onChange={onChangeInput}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category">Category</h1>
      {categoryOptions.map(each => (
        <button
          type="button"
          className="button"
          value={each.categoryId}
          onClick={categoryClicked}
          key={each.categoryId}
        >
          <p>{each.name}</p>
        </button>
      ))}
      <p className="category">Rating</p>
      {ratingsList.map(each => (
        <button
          type="button"
          className="button"
          value={each.ratingId}
          onClick={ratingClicked}
          key={each.ratingId}
        >
          <img
            src={each.imageUrl}
            className="star-image"
            alt={`rating ${each.ratingId}`}
          />
          &up
        </button>
      ))}
      <button className="filter-button" type="button" onClick={clearCliked}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
