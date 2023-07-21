import axios from 'axios';
import { countries } from '../store/modules/settings/data';

const STAGING_ENDPOINT = 'https://dev.jufrah.com/admin/';
const PROD_ENDPOINT = 'https://jufrah.com/admin/';
const PROD_HOST = 'aman.jufrah.com';

export const isProduction = window.location.host === PROD_HOST;
console.log(isProduction);

const JufrahAdminAPI = axios.create({
  baseURL: isProduction ? PROD_ENDPOINT : PROD_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

JufrahAdminAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && localStorage.getItem('user')) {
      localStorage.removeItem('user');
      window.location.reload();
    } else {
      console.log(error.response.status);
      return Promise.reject(error);
    }
  }
);

// let country = JSON.parse(localStorage.getItem('country')).conn;
let country = localStorage.getItem('country')
  ? JSON.parse(localStorage.getItem('country')).conn
  : countries[0].conn;

const endpoints = {
  login: 'login',
  logout: 'logout',
  admins: 'admins',
  permissions: 'permissions',
  adminNotifications: 'notifications',
  dashboard: country + '/dashboard',
  users: country + '/users',
  block: country + '/users/block/',
  unblock: country + '/users/unblock/',
  categories: country + '/categories',
  createOptionValue: country + '/options/',
  updateOptionValue: country + '/values/',
  deleteOptionValue: country + '/values/',
  updateCategoryOption: country + '/options/',
  createCategoryOption: country + '/categories/',
  deleteCategoryOption: country + '/options/',
  updateCategory: country + '/categories/',
  createCategory: country + '/categories',
  deleteCategory: country + '/categories',
  updateCategoryPayment: country + '/categories/',
  super: 'permissions/super/',
  featuredPackages: country + '/featured-packages',
  sortFeaturedPackages: country + '/featured-packages/sort',
  ads: country + '/ads',
  reports: country + '/reports',
  reportCategories: country + '/reports/categories',
  reportedAds: country + '/ads/reported',
  notificationsMessages: country + '/notifications/messages',
  campaign: country + '/notifications/campaign',
  freeVouchers: country + '/free-vouchers',
  mobileAds: country + '/mobile-ads',
  spamSettings: country + '/settings/spam',
  contactUs: country + '/contact-us/',
  terms: country + '/terms',
};

/**
 * Add auth header if token exist
 */
(function () {
  let authToken = null;
  let user = localStorage.getItem('user');
  if (user) {
    authToken = JSON.parse(user).access_token;
  }

  if (authToken === null) {
    // This means that there ISN'T JWT and no user is logged in.
    JufrahAdminAPI.defaults.headers.common.Authorization = null;
  } else {
    // This means that there IS a JWT so someone must be logged in.
    JufrahAdminAPI.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  }
})();

export { JufrahAdminAPI, endpoints };
