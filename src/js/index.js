import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/* Global State of the app 
- Search object
- Current Recipe object
- Shopping list object
- Liked Recipes
*/

const state = {};

const controlSearch = async () => {
  //Get query from the view
  const query = searchView.getInput(); // Do this later 
  console.log(query);
  //
  if (query) {
    // New search object Add the object to state
    state.search = new Search(query);

    //Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    searchView.renderResults(state.search.result);
  }

}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

