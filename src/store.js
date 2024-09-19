import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/loginReducers";
import { allCitiesReducer, cityAddReducer, cityUpdateAndDeleteReducer } from "./reducers/cityReducers";
import { allServiceReducer, serviceAddReducer, serviceUpdateAndDeleteReducer } from "./reducers/servicesReducers";
import { allServiceTypeReducer, serviceTypeAddReducer, serviceTypeUpdateAndDeleteReducer } from "./reducers/serviceTypeReducers";
import { allEventsReducer, eventAddReducer, eventUpdateAndDeleteReducer } from "./reducers/eventReducers";
import { allBlogsReducer, blogAddReducer, blogUpdateAndDeleteReducer, singleBlogsReducer } from "./reducers/blogReducers";
import { allProductsReducer, productAddReducer, productUpdateAndDeleteReducer, singleProductReducer } from "./reducers/productReducers";
import { allHoneymoonsReducer, honeymoonAddReducer, honeymoonUpdateAndDeleteReducer, singleHoneymoonReducer } from "./reducers/honeymoonReducers";
import { allloveStoryReducer, approvedLoveStoryReducer, loveStoryAddReducer, loveStoryDeleteReducer } from "./reducers/loveStoryReducers";

const reducer = combineReducers({
  user: userReducer,
  //city
  cities: allCitiesReducer,
  addCity: cityAddReducer,
  cityUpdateAndDelete: cityUpdateAndDeleteReducer,
  //service
  services:allServiceReducer,
  addServices:serviceAddReducer,
  servicesUpdateAndDelete: serviceUpdateAndDeleteReducer,
  //serviceType
  serviceTypeCategories: allServiceTypeReducer,
  addServiceType: serviceTypeAddReducer,
  serviceTypeUpdateAndDelete: serviceTypeUpdateAndDeleteReducer,
  //events
  events: allEventsReducer,
  addEvents: eventAddReducer,
  eventsUpdateAndDelete: eventUpdateAndDeleteReducer,
  //blog
  singleBlog: singleBlogsReducer,
  blog: allBlogsReducer,
  addblog: blogAddReducer,
  blogUpdateAndDelete:blogUpdateAndDeleteReducer,
  //product
  singleProduct: singleProductReducer,
  products: allProductsReducer,
  addProduct: productAddReducer,
  productUpdateAndDelete:productUpdateAndDeleteReducer,
  //honeymoon
  singleHoneymoon: singleHoneymoonReducer,
  allHoneymoonPackages: allHoneymoonsReducer,
  addHoneymoon: honeymoonAddReducer,
  honeymoonUpdateAndDelete:honeymoonUpdateAndDeleteReducer,
  //loveStory
  approvedLoveStory: approvedLoveStoryReducer,
  allloveStory: allloveStoryReducer,
  loveStoryAdd: loveStoryAddReducer,
  loveStoryDelete:loveStoryDeleteReducer
});

let initialState = {};

// Load user data from local storage if it exists
const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

if (userInfoFromStorage) {
  initialState.user = {
    isAuthenticated: true,
    user: userInfoFromStorage,
    loading: false,
  };
}

const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
  );
  
  export default store;
  