import BoxedLayout from 'Container/BoxedV2';

// dashboard components
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');
const Saas = () => import('Views/dashboard/Saas');

// Crypto components
const Crypto = () => import('Views/crypto/Crypto');
const MarketCap = () => import('Views/crypto/MarketCap');
const Wallet = () => import('Views/crypto/Wallet');
const Trade = () => import('Views/crypto/Trade');

// CRM components
const Projects = () => import('Views/crm/Projects');
const ProjectDetails = () => import('Views/crm/ProjectDetails');
const Clients = () => import('Views/crm/Clients');
const Reports = () => import('Views/crm/Reports');
const Dashboard = () => import('Views/crm/Dashboard');


//courses components
const Courses = () => import('Views/courses/Courses');
const CourseList = () => import('Views/courses/CourseList');
const CoursesDetail = () => import('Views/courses/CoursesDetail');
const SignIn = () => import('Views/courses/SignIn');
const Payment = () => import('Views/courses/Payment');

// Widgets component
const ChartWidgets = () => import('Views/widgets/chart-widgets/ChartWidgets');
const UserWidgets = () => import('Views/widgets/user-widgets/UserWidgets');

//Ecommerce Widgets

const Shop = () => import('Views/ecommerce/Shop');
const ProductDetail = () => import('Views/ecommerce/ProductDetail');
const AddProduct = () => import('Views/ecommerce/AddProduct');
const EditProduct = () => import('Views/ecommerce/EditProduct');
const EditDetail = () => import('Views/ecommerce/EditDetail');
const Cart = () => import('Views/ecommerce/Cart');
const Checkout = () => import('Views/ecommerce/Checkout');
const CreditCard = () => import('Views/ecommerce/CreditCard');

// Inbox component
const Inbox = () => import('Views/inbox/Inbox');

// chat component
const Chat = () => import('Views/chat/Chat');

// calendar components
const Calendar = () => import('Views/calendar/Calendar');

// ui components
const AppBars = () => import('Views/ui-elements/AppBars');
const Banners = () => import('Views/ui-elements/Banners');
const ListItemGroups = () => import('Views/ui-elements/ListItemGroups');
const SlideGroups = () => import('Views/ui-elements/SlideGroups');
const Overlays = () => import('Views/ui-elements/Overlays');
const ChipGroups = () => import('Views/ui-elements/ChipGroups');
const FileInput = () => import('Views/ui-elements/FileInput');
const ColorPickers = () => import('Views/ui-elements/ColorPickers');
const Buttons = () => import('Views/ui-elements/Buttons');
const Cards = () => import('Views/ui-elements/Cards');
const Grid = () => import('Views/ui-elements/Grid');
const Groups = () => import('Views/ui-elements/Groups');
const Hover = () => import('Views/ui-elements/Hover');
const Images = () => import('Views/ui-elements/Images');
const List = () => import('Views/ui-elements/List');
const Menu = () => import('Views/ui-elements/Menu');
const Ratings = () => import('Views/ui-elements/Ratings');
const Slider = () => import('Views/ui-elements/Slider');
const Snackbar = () => import('Views/ui-elements/Snackbar');
const Tooltip = () => import('Views/ui-elements/Tooltip');
const Dialog = () => import('Views/ui-elements/Dialog');
const Select = () => import('Views/ui-elements/Select');
const Input = () => import('Views/ui-elements/Input');
const Checkbox = () => import('Views/ui-elements/Checkbox');
const Radio = () => import('Views/ui-elements/Radio');
const Toolbar = () => import('Views/ui-elements/Toolbar');
const Progress = () => import('Views/ui-elements/Progress');
const Tabs = () => import('Views/ui-elements/Tabs');
const Carousel = () => import('Views/ui-elements/Carousel');
const Chips = () => import('Views/ui-elements/Chips');
const Datepicker = () => import('Views/ui-elements/Datepicker');
const Timepicker = () => import('Views/ui-elements/Timepicker');

// chart components
const VueChartjs = () => import('Views/charts/VueChartjs');
const VueEcharts = () => import('Views/charts/VueEcharts');

// maps views
const GoogleMaps = () => import('Views/maps/GoogleMaps');
const LeafletMaps = () => import('Views/maps/LeafletMaps');

// Pages views
const Blank = () => import('Views/pages/Blank');
const Blog = () => import('Views/pages/Blog');
const Gallery = () => import('Views/pages/Gallery');
const Pricing1 = () => import('Views/pages/Pricing-1');
const Pricing2 = () => import('Views/pages/Pricing-2');

// users views
const UserProfile = () => import('Views/users/UserProfile');
const UsersList = () => import('Views/users/UsersList');

// drag-drop components
const Vue2Dragula = () => import('Views/drag-drop/Vue2Dragula');
const VueDraggable = () => import('Views/drag-drop/Vuedraggable');
const VueDraggableResizeable = () => import('Views/drag-drop/VueDraggableResizable');

// icons components
const Themify = () => import('Views/icons/Themify');
const Material = () => import('Views/icons/Material');

// editor components
const QuillEditor = () => import('Views/editor/QuillEditor');
const WYSIWYG = () => import('Views/editor/WYSIWYG');

// form componenets
const FormValidation = () => import('Views/forms/FormValidation');
const Stepper = () => import('Views/forms/Stepper');

// Data table componenets
const SimpleTable = () => import('Views/tables/SimpleTable');
const Standard = () => import('Views/tables/Standard');
const Slots = () => import('Views/tables/Slots');
const SelectableRows = () => import('Views/tables/SelectableRows');
const SearchWithText = () => import('Views/tables/SearchWithText');

// Timelines component 
const Usage = () => import('Views/timelines/Usage');
const SmallDots = () => import('Views/timelines/SmallDots');
const IconDots = () => import('Views/timelines/IconDots');
const ColoredDots = () => import('Views/timelines/ColoredDots');
const OppositeSlot = () => import('Views/timelines/OppositeSlot');
const DenseAlert = () => import('Views/timelines/DenseAlert');
const Advanced = () => import('Views/timelines/Advanced');

// Treeview component
const Treeview = () => import('Views/treeview/Treeview');

// Extensions components
const ImageCropper = () => import('Views/extensions/ImageCropper');
const VideoPlayer = () => import('Views/extensions/VideoPlayer');
const Dropzone = () => import('Views/extensions/Dropzone');

export default {
   path: '/boxed-v2',
   component: BoxedLayout,
   redirect: '/boxed-v2/dashboard/ecommerce',
   children: [
      {
         component: Ecommerce,
         path: '/boxed-v2/dashboard/ecommerce',
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: null
         }
      },
      {
         component: WebAnalytics,
         path: '/boxed-v2/dashboard/web-analytics',
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: null
         }
      },
      {
         component: Magazine,
         path: '/boxed-v2/dashboard/magazine',
         meta: {
            requiresAuth: true,
            title: 'message.magazineAndNews',
            breadcrumb: null
         }
      },
      {
         component: News,
         path: '/boxed-v2/dashboard/news',
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: null
         }
      },
      {
         component: Agency,
         path: '/boxed-v2/dashboard/agency',
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: null
         }
      },
      {
         component: Saas,
         path: '/boxed-v2/dashboard/saas',
         meta: {
            requiresAuth: true,
            title: 'message.saas',
            breadcrumb: null
         }
      },

      
      {
         path: '/boxed-v2/dashboard/crypto',
         component: Crypto,
         meta: {
            requiresAuth: true,
            title: 'message.crypto',
            breadcrumb: [
              {
                breadcrumbInactive: 'Crypto /'
              },
              {
                breadcrumbActive: 'Crypto'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/crypto/market-cap',
         component: MarketCap,
         meta: {
            requiresAuth: true,
            title: 'message.marketCap',
            breadcrumb: [
              {
                breadcrumbInactive: 'Crypto /'
              },
              {
                breadcrumbActive: 'MarketCap'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/crypto/trade',
         component: Trade,
         meta: {
            requiresAuth: true,
            title: 'message.trade',
            breadcrumb: [
              {
                breadcrumbInactive: 'Crypto /'
              },
              {
                breadcrumbActive: 'Trade'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/crypto/wallet',
         component: Wallet,
         meta: {
            requiresAuth: true,
            title: 'message.wallet',
            breadcrumb: [
              {
                breadcrumbInactive: 'Crypto /'
              },
              {
                breadcrumbActive: 'Wallet'
              }
            ]
         }
      },

      {
         path: '/boxed-v2/crm/projects',
         component: Projects,
         meta: {
            requiresAuth: true,
            title: 'message.projects',
            breadcrumb: [
              {
                breadcrumbInactive: 'CRM /'
              },
              {
                breadcrumbActive: 'Projects'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/crm/projectDetails/:id',
         component: ProjectDetails,
         meta: {
            requiresAuth: true,
            title: 'message.projectDetails',
            breadcrumb: [
              {
                breadcrumbInactive: 'CRM /'
              },
              {
                breadcrumbActive: 'projectDetails'
              }
            ]
         }
      },
      
      {
         path: '/boxed-v2/crm/clients',
         component: Clients,
         meta: {
            requiresAuth: true,
            title: 'message.clients',
            breadcrumb: [
              {
                breadcrumbInactive: 'CRM /'
              },
              {
                breadcrumbActive: 'Clients'
              }
            ]
         }
      },

      {
         path: '/boxed-v2/crm/reports',
         component: Reports,
         meta: {
            requiresAuth: true,
            title: 'message.reports',
            breadcrumb: [
              {
                breadcrumbInactive: 'CRM /'
              },
              {
                breadcrumbActive: 'Reports'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/dashboard/crm',
         component: Dashboard,
         meta: {
            requiresAuth: true,
            title: 'message.Dashboard',
            breadcrumb: [
              {
                breadcrumbInactive: 'CRM /'
              },
              {
                breadcrumbActive: 'Dashboard'
              }
            ]
         }
      },


      {
         path: '/boxed-v2/courses',
         component: Courses,
         meta: {
            requiresAuth: true,
            title: 'message.courses',
            breadcrumb: [
              {
                breadcrumbInactive: 'Courses /'
              },
              {
                breadcrumbActive: 'Courses'
              }
            ]
         }
      },
      {
        path: '/boxed-v2/courses/courses-list',
        component: CourseList,
        meta: {
          requiresAuth: true,
          title: 'message.coursesList',
          breadcrumb: [
            {
              breadcrumbInactive: 'Courses /'
            },
            {
              breadcrumbActive: 'List'
            }
          ]
        }
      },
		  {
         path: '/boxed-v2/courses/courses-detail',
         component: CoursesDetail,
         meta: {
            requiresAuth: true,
            title: 'message.courseDetail',
            breadcrumb: [
              {
                breadcrumbInactive: 'Courses /'
              },
              {
                breadcrumbActive: 'Detail'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/courses/sign-in',
         component: SignIn,
         meta: {
            requiresAuth: true,
            title: 'message.signIn',
            breadcrumb: [
              {
                breadcrumbInactive: 'Courses /'
              },
              {
                breadcrumbActive: 'Sign In'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/courses/payment',
         component: Payment,
         meta: {
            requiresAuth: true,
            title: 'message.payment',
            breadcrumb: [
					{
						breadcrumbInactive: 'Courses /'
					},
					{
						breadcrumbActive: 'Payment'
					}
            ]
         }
      },
      {
         path: '/boxed-v2/widgets/user-widgets',
         component: UserWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.user',
            breadcrumb: [
              {
                breadcrumbInactive: 'Widgets /'
              },
              {
                breadcrumbActive: 'User'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/widgets/chart-widgets',
         component: ChartWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.charts',
            breadcrumb: [
              {
                breadcrumbInactive: 'Widgets /'
              },
              {
                breadcrumbActive: 'Charts'
              }
            ]
         }
      },
    
      {
         path: '/boxed-v2/ecommerce/shop',
         component: Shop,
         meta: {
            requiresAuth: true,
            title: 'message.shop',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Shop'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/product-detail/:category/:id',
         component: ProductDetail,
         meta: {
            requiresAuth: true,
            title: 'message.productDetail',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Product Detail'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/add-product',
         component: AddProduct,
         meta: {
            requiresAuth: true,
            title: 'message.addProduct',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Add Product'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/edit-product',
         component: EditProduct,
         meta: {
            requiresAuth: true,
            title: 'message.editProduct',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Edit Product'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/edit-detail/:category/:id',
         component: EditDetail,
         meta: {
            requiresAuth: true,
            title: 'message.editDetail',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Edit Detail'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/cart',
         component: Cart,
         meta: {
            requiresAuth: true,
            title: 'message.cart',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Cart'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/checkout',
         component: Checkout,
         meta: {
            requiresAuth: true,
            title: 'message.checkout',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Checkout'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ecommerce/cards',
         component: CreditCard,
         meta: {
            requiresAuth: true,
            title: 'message.cards',
            breadcrumb: [
              {
                breadcrumbInactive: 'Ecommerce /'
              },
              {
                breadcrumbActive: 'Cards'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/pages/blog',
         component: Blog,
         meta: {
            requiresAuth: true,
            title: 'message.blog',
            breadcrumb: [
              {
                breadcrumbInactive: 'Pages /'
              },
              {
                breadcrumbActive: 'Blog'
              }
            ]
         }
      },
      {
         component: Gallery,
         path: '/boxed-v2/pages/gallery',
         meta: {
            requiresAuth: true,
            title: 'message.gallery',
            breadcrumb: [
              {
                breadcrumbInactive: 'Pages /'
              },
              {
                breadcrumbActive: 'Gallery'
              }
            ]
         }
      },
      {
         component: Pricing1,
         path: '/boxed-v2/pages/pricing-1',
         meta: {
            requiresAuth: true,
            title: 'message.pricing1',
            breadcrumb: [
              {
                breadcrumbInactive: 'Pages /'
              },
              {
                breadcrumbActive: 'Pricing-1'
              }
            ]
         }
      },
      {
         component: Pricing2,
         path: '/boxed-v2/pages/pricing-2',
         meta: {
            requiresAuth: true,
            title: 'message.pricing2',
            breadcrumb: [
              {
                breadcrumbInactive: 'Pages /'
              },
              {
                breadcrumbActive: 'Pricing-2'
              }
            ]
         }
      },
      {
         component: Blank,
         path: '/boxed-v2/pages/blank',
         meta: {
            requiresAuth: true,
            title: 'message.blank',
            breadcrumb: [
              {
                breadcrumbInactive: 'Pages /'
              },
              {
                breadcrumbActive: 'Blank'
              }
            ]
         }
      },
      {
         component: Inbox,
         path: '/boxed-v2/inbox',
         meta: {
            requiresAuth: true,
            title: 'message.inbox',
            breadcrumb: null
         }
      },
      {
         component: Chat,
         path: '/boxed-v2/chat',
         meta: {
            requiresAuth: true,
            title: 'message.chat',
            breadcrumb: null
         }
      },
       {
         path: '/boxed-v2/treeview',
         component: Treeview,
         meta: {
            requiresAuth: true,
            title: 'message.treeview',
            breadcrumb: [
              {
                breadcrumbInactive: null
              },
              {
                breadcrumbActive: 'Treeview'
              }
            ]
         }
      },
      // Timelines Components
      {
         path: '/boxed-v2/timelines/usage',
         component: Usage,
         meta: {
            requiresAuth: true,
            title: 'message.usage',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Usage"
              }
            ]
         }
      },
       {
         path: '/boxed-v2/timelines/smalldots',
         component: SmallDots,
         meta: {
            requiresAuth: true,
            title: 'message.smallDots',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Small Dots"
              }
            ]
         }
      },
       {
         path: '/boxed-v2/timelines/icondots',
         component: IconDots,
         meta: {
            requiresAuth: true,
            title: 'message.iconDots',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Icon Dots"
              }
            ]
         }
      },
      {
         path: '/boxed-v2/timelines/coloreddots',
         component: ColoredDots,
         meta: {
            requiresAuth: true,
            title: 'message.coloredDots',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Colored Dots"
              }
            ]
         }
      },
      {
         path: '/boxed-v2/timelines/oppositeslot',
         component: OppositeSlot,
         meta: {
            requiresAuth: true,
            title: 'message.oppositeSlot',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Opposite Slot"
              }
            ]
         }
      },
      {
         path: '/boxed-v2/timelines/densealert',
         component: DenseAlert,
         meta: {
            requiresAuth: true,
            title: 'message.denseAlert',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Dense Alert"
              }
            ]
         }
      },
      {
         path: '/boxed-v2/timelines/advanced',
         component: Advanced,
         meta: {
            requiresAuth: true,
            title: 'message.advanced',
             breadcrumb: [
              {
                breadcrumbInactive: 'Timelines /'
              },
              {
                breadcrumbActive: "Advanced"
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/app-bars',
         component: AppBars,
         meta: {
            requiresAuth: true,
            title: 'message.appBars',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'App Bars'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/banners',
         component: Banners,
         meta: {
            requiresAuth: true,
            title: 'message.banners',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Banners'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/list-item-groups',
         component: ListItemGroups,
         meta: {
            requiresAuth: true,
            title: 'message.ListItemGroups',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'List Item Groups'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/slide-groups',
         component: SlideGroups,
         meta: {
            requiresAuth: true,
            title: 'message.slideGroups',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Slide Groups'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/chip-groups',
         component: ChipGroups,
         meta: {
            requiresAuth: true,
            title: 'message.chipGroups',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Chip Groups'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/overlays',
         component: Overlays,
         meta: {
            requiresAuth: true,
            title: 'message.overlays',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'overlays'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/file-input',
         component: FileInput,
         meta: {
            requiresAuth: true,
            title: 'message.fileInput',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'File Input'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/color-pickers',
         component: ColorPickers,
         meta: {
            requiresAuth: true,
            title: 'message.colorPickers',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Color Picker'
              }
            ]
         }
      },
      {
         component: Buttons,
         path: '/boxed-v2/ui-elements/buttons',
         meta: {
            requiresAuth: true,
            title: 'message.buttons',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Buttons'
              }
            ]
         }
      },
      {
         component: Cards,
         path: '/boxed-v2/ui-elements/cards',
         meta: {
            requiresAuth: true,
            title: 'message.cards',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Cards'
              }
            ]
         }
      },
      {
         component: Checkbox,
         path: '/boxed-v2/ui-elements/checkbox',
         meta: {
            requiresAuth: true,
            title: 'message.checkbox',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Checkbox'
              }
            ]
         }
      },
      {
         component: Carousel,
         path: '/boxed-v2/ui-elements/carousel',
         meta: {
            requiresAuth: true,
            title: 'message.carousel',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Carousel'
              }
            ]
         }
      },
      {
         component: Chips,
         path: '/boxed-v2/ui-elements/chips',
         meta: {
            requiresAuth: true,
            title: 'message.chips',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Chips'
              }
            ]
         }
      },
      {
         component: Datepicker,
         path: '/boxed-v2/ui-elements/datepicker',
         meta: {
            requiresAuth: true,
            title: 'message.datepicker',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Datepicker'
              }
            ]
         }
      },
      {
         component: Dialog,
         path: '/boxed-v2/ui-elements/dialog',
         meta: {
            requiresAuth: true,
            title: 'message.dialog',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Dialog'
              }
            ]
         }
      },
      {
         component: Grid,
         path: '/boxed-v2/ui-elements/grid',
         meta: {
            requiresAuth: true,
            title: 'message.grid',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Grid'
              }
            ]
         }
      },
       {
         path: '/boxed-v2/ui-elements/groups',
         component: Groups,
         meta: {
            requiresAuth: true,
            title: 'message.groups',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Groups'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/hover',
         component: Hover,
         meta: {
            requiresAuth: true,
            title: 'message.hover',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Hover'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/images',
         component: Images,
         meta: {
            requiresAuth: true,
            title: 'message.images',
            breadcrumb:  [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Images'
              }
            ]
         }
      },
      {
         component: Input,
         path: '/boxed-v2/ui-elements/input',
         meta: {
            requiresAuth: true,
            title: 'message.input',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Input'
              }
            ]
         }
      },
      {
         component: List,
         path: '/boxed-v2/ui-elements/list',
         meta: {
            requiresAuth: true,
            title: 'message.list',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'List'
              }
            ]
         }
      },
      {
         component: Menu,
         path: '/boxed-v2/ui-elements/menu',
         meta: {
            requiresAuth: true,
            title: 'message.menu',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Menu'
              }
            ]
         }
      },
      {
         component: Progress,
         path: '/boxed-v2/ui-elements/progress',
         meta: {
            requiresAuth: true,
            title: 'message.progress',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Progress'
              }
            ]
         }
      },
      {
         component: Radio,
         path: '/boxed-v2/ui-elements/radio',
         meta: {
            requiresAuth: true,
            title: 'message.radio',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Radio'
              }
            ]
         }
      },
      {
         component: Select,
         path: '/boxed-v2/ui-elements/select',
         meta: {
            requiresAuth: true,
            title: 'message.select',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Select'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/ui-elements/ratings',
         component: Ratings,
         meta: {
            requiresAuth: true,
            title: 'message.ratings',
            breadcrumb:  [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Ratings'
              }
            ]
         }
      },
      {
         component: Slider,
         path: '/boxed-v2/ui-elements/slider',
         meta: {
            requiresAuth: true,
            title: 'message.slider',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Slider'
              }
            ]
         }
      },
      {
         component: Snackbar,
         path: '/boxed-v2/ui-elements/snackbar',
         meta: {
            requiresAuth: true,
            title: 'message.snackbar',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Snackbar'
              }
            ]
         }
      },
      {
         component: Tabs,
         path: '/boxed-v2/ui-elements/tabs',
         meta: {
            requiresAuth: true,
            title: 'message.tabs',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Tabs'
              }
            ]
         }
      },
      {
         component: Toolbar,
         path: '/boxed-v2/ui-elements/toolbar',
         meta: {
            requiresAuth: true,
            title: 'message.toolbar',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Toolbar'
              }
            ]
         }
      },
      {
         component: Tooltip,
         path: '/boxed-v2/ui-elements/tooltip',
         meta: {
            requiresAuth: true,
            title: 'message.tooltip',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Tooltip'
              }
            ]
         }
      },
      {
         component: Timepicker,
         path: '/boxed-v2/ui-elements/timepicker',
         meta: {
            requiresAuth: true,
            title: 'message.timepicker',
            breadcrumb: [
              {
                breadcrumbInactive: 'UI Elements /'
              },
              {
                breadcrumbActive: 'Timepicker'
              }
            ]
         }
      },
      {
         component: FormValidation,
         path: '/boxed-v2/forms/form-validation',
         meta: {
            requiresAuth: true,
            title: 'message.formValidation',
            breadcrumb: [
              {
                breadcrumbInactive: 'Forms /'
              },
              {
                breadcrumbActive: 'FormValidation'
              }
            ]
         }
      },
      {
         component: Stepper,
         path: '/boxed-v2/forms/stepper',
         meta: {
            requiresAuth: true,
            title: 'message.stepper',
            breadcrumb: [
              {
                breadcrumbInactive: 'Forms /'
              },
              {
                breadcrumbActive: 'Stepper'
              }
            ]
         }
      },
      {
         component: VueChartjs,
         path: '/boxed-v2/charts/vue-chartjs',
         meta: {
            requiresAuth: true,
            title: 'message.vueChartjs',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Charts /'
              },
              {
                breadcrumbActive: 'Vue Chartjs'
              }
            ]
         }
      },
      {
         component: VueEcharts,
         path: '/boxed-v2/charts/vue-echarts',
         meta: {
            requiresAuth: true,
            title: 'message.vueEcharts',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Charts /'
              },
              {
                breadcrumbActive: 'Vue Echarts'
              }
            ]
         }
      },
      {
         component: Themify,
         path: '/boxed-v2/icons/themify',
         meta: {
            requiresAuth: true,
            title: 'message.themify',
            breadcrumb: [
              {
                breadcrumbInactive: 'Icons /'
              },
              {
                breadcrumbActive: 'Themify'
              }
            ]
         }
      },
      {
         component: Material,
         path: '/boxed-v2/icons/material',
         meta: {
            requiresAuth: true,
            title: 'message.material',
            breadcrumb: [
              {
                breadcrumbInactive: 'Icons /'
              },
              {
                breadcrumbActive: 'Material'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/tables/simple',
         component: SimpleTable,
         meta: {
            requiresAuth: true,
            title: 'message.simpleTable',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Simple'
              }
            ]
         }
      },
      {
         component: Standard,
         path: '/boxed-v2/tables/standard',
         meta: {
            requiresAuth: true,
            title: 'message.standard',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Standard'
              }
            ]
         }
      },
      {
         component: Slots,
         path: '/boxed-v2/tables/slots',
         meta: {
            requiresAuth: true,
            title: 'message.slots',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Slots'
              }
            ]
         }
      },
      {
         component: SelectableRows,
         path: '/boxed-v2/tables/selectablerows',
         meta: {
            requiresAuth: true,
            title: 'message.selectable',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Selectable Rows'
              }
            ]
         }
      },
      {
         component: SearchWithText,
         path: '/boxed-v2/tables/searchwithtext',
         meta: {
            requiresAuth: true,
            title: 'message.searchRow',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Search Row'
              }
            ]
         }
      },
      {
         component: GoogleMaps,
         path: '/boxed-v2/maps/google-maps',
         meta: {
            requiresAuth: true,
            title: 'message.googleMaps',
            breadcrumb: [
              {
                breadcrumbInactive: 'Maps /'
              },
              {
                breadcrumbActive: 'Google Map'
              }
            ]
         }
      },
      {
         component: LeafletMaps,
         path: '/boxed-v2/maps/leaflet-maps',
         meta: {
            requiresAuth: true,
            title: 'message.leafletMaps',
           breadcrumb: [
              {
                breadcrumbInactive: 'Maps /'
              },
              {
                breadcrumbActive: 'Leaflet Map'
              }
            ]
         }
      },
      {
         component: UserProfile,
         path: '/boxed-v2/users/user-profile',
         meta: {
            requiresAuth: true,
            title: 'message.userProfile',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Users /'
              },
              {
                breadcrumbActive: 'User Profile'
              }
            ]
         }
      },
      {
         component: UsersList,
         path: '/boxed-v2/users/users-list',
         meta: {
            requiresAuth: true,
            title: 'message.usersList',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Users /'
              },
              {
                breadcrumbActive: 'Users List'
              }
            ]
         }
      },
      {
         component: Calendar,
         path: '/boxed-v2/calendar',
         meta: {
            requiresAuth: true,
            title: 'message.calendar',
            breadcrumb:  [
              {
                breadcrumbInactive: null
              },
              {
                breadcrumbActive: 'Calendar'
              }
            ]
         }
      },
      {
         component: QuillEditor,
         path: '/boxed-v2/editor/quilleditor',
         meta: {
            requiresAuth: true,
            title: 'message.quillEditor',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Editor /'
              },
              {
                breadcrumbActive: 'Quill Editor'
              }
            ]
         }
      },
      {
         component: WYSIWYG,
         path: '/boxed-v2/editor/wysiwyg',
         meta: {
            requiresAuth: true,
            title: 'message.wYSIWYG',
            breadcrumb:  [
              {
                breadcrumbInactive: 'Editor /'
              },
              {
                breadcrumbActive: 'WYSIWYG'
              }
            ]
         }
      },
      {
         component: Vue2Dragula,
         path: '/boxed-v2/drag-drop/vue2dragula',
         meta: {
            requiresAuth: true,
            title: 'message.vue2Dragula',
            breadcrumb: [
              {
                breadcrumbInactive: 'Drag And Drop /'
              },
              {
                breadcrumbActive: 'Vue2 Dragula'
              }
            ]
         }
      },
      {
         component: VueDraggable,
         path: '/boxed-v2/drag-drop/vuedraggable',
         meta: {
            requiresAuth: true,
            title: 'message.vueDraggable',
            breadcrumb: [
              {
                breadcrumbInactive: 'Drag And Drop /'
              },
              {
                breadcrumbActive: 'Vue Draggable'
              }
            ]
         }
      },
      {
         component: VueDraggableResizeable,
         path: '/boxed-v2/drag-drop/vuedraggableresizeable',
         meta: {
            requiresAuth: true,
            title: 'message.draggableResizeable',
            breadcrumb: [
              {
                breadcrumbInactive: 'Drag And Drop /'
              },
              {
                breadcrumbActive: 'Draggable Resizeable'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/image-cropper',
         component: ImageCropper,
         meta: {
            requiresAuth: true,
            title: 'message.imageCropper',
            breadcrumb: [
              {
                breadcrumbInactive: 'Extensions /'
              },
              {
                breadcrumbActive: 'Image Cropper'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/video-player',
         component: VideoPlayer,
         meta: {
            requiresAuth: true,
            title: 'message.videoPlayer',
            breadcrumb: [
              {
                breadcrumbInactive: 'Extensions /'
              },
              {
                breadcrumbActive: 'Video Player'
              }
            ]
         }
      },
      {
         path: '/boxed-v2/dropzone',
         component: Dropzone,
         meta: {
            requiresAuth: true,
            title: 'message.dropzone',
            breadcrumb: [
              {
                breadcrumbInactive: 'Extensions /'
              },
              {
                breadcrumbActive: 'Dropzone'
              }
            ]
         }
      }
   ]
}
