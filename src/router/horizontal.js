import HorizontalLayout from 'Container/HorizontalLayout'

// dashboard components
const Dashboard = () => import('Views/crm/Dashboard');
const Crypto = () => import('Views/crypto/Crypto');
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');
const Saas = () => import('Views/dashboard/Saas');

// Crypto components
const MarketCap = () => import('Views/crypto/MarketCap');
const Wallet = () => import('Views/crypto/Wallet');
const Trade = () => import('Views/crypto/Trade');

// CRM components
const Projects = () => import('Views/crm/Projects');
const ProjectDetails = () => import('Views/crm/ProjectDetails');
const Clients = () => import('Views/crm/Clients');
const Reports = () => import('Views/crm/Reports');


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
   path: '/horizontal',
   component: HorizontalLayout,
   redirect: '/horizontal/dashboard/ecommerce',
   children: [
      {
         component: Ecommerce,
         path: '/horizontal/dashboard/ecommerce',
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: null
         }
      },
      {
         component: WebAnalytics,
         path: '/horizontal/dashboard/web-analytics',
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: null
         }
      },
      {
         component: Magazine,
         path: '/horizontal/dashboard/magazine',
         meta: {
            requiresAuth: true,
            title: 'message.magazine',
            breadcrumb: null
         }
      },
      {
         component: News,
         path: '/horizontal/dashboard/news',
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: null
         }
      },
      {
         component: Agency,
         path: '/horizontal/dashboard/agency',
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: null
         }
      },
      {
         component: Saas,
         path: '/horizontal/dashboard/saas',
         meta: {
            requiresAuth: true,
            title: 'message.saas',
            breadcrumb: null
         }
      },

      
      {
         path: '/horizontal/dashboard/crypto',
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
         path: '/horizontal/crypto/market-cap',
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
         path: '/horizontal/crypto/trade',
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
         path: '/horizontal/crypto/wallet',
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
         path: '/horizontal/crm/projects',
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
         path: '/horizontal/crm/projectDetails/:id',
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
         path: '/horizontal/crm/clients',
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
         path: '/horizontal/crm/reports',
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
         path: '/horizontal/dashboard/crm',
         component: Dashboard,
         meta: {
            requiresAuth: true,
            title: 'message.dashboard',
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
         path: '/horizontal/courses',
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
        path: '/horizontal/courses/courses-list',
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
         path: '/horizontal/courses/courses-detail',
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
         path: '/horizontal/courses/sign-in',
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
         path: '/horizontal/courses/payment',
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
         path: '/horizontal/widgets/user-widgets',
         component: UserWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.user',
            breadcrumb:  [
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
         path: '/horizontal/widgets/chart-widgets',
         component: ChartWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.charts',
            breadcrumb:  [
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
         path: '/horizontal/ecommerce/shop',
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
         path: '/horizontal/ecommerce/product-detail/:category/:id',
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
         path: '/horizontal/ecommerce/add-product',
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
         path: '/horizontal/ecommerce/edit-product',
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
         path: '/horizontal/ecommerce/edit-detail/:category/:id',
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
         path: '/horizontal/ecommerce/cart',
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
         path: '/horizontal/ecommerce/checkout',
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
         path: '/horizontal/ecommerce/cards',
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
         path: '/horizontal/pages/blog',
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
         path: '/horizontal/pages/gallery',
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
         path: '/horizontal/pages/pricing-1',
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
         path: '/horizontal/pages/pricing-2',
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
         path: '/horizontal/pages/blank',
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
         path: '/horizontal/inbox',
         meta: {
            requiresAuth: true,
            title: 'message.inbox',
            breadcrumb: null
         }
      },
      {
         component: Chat,
         path: '/horizontal/chat',
         meta: {
            requiresAuth: true,
            title: 'message.chat',
            breadcrumb: null
         }
      },
       {
         path: '/horizontal/treeview',
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
         path: '/horizontal/timelines/usage',
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
         path: '/horizontal/timelines/smalldots',
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
         path: '/horizontal/timelines/icondots',
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
         path: '/horizontal/timelines/coloreddots',
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
         path: '/horizontal/timelines/oppositeslot',
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
         path: '/horizontal/timelines/densealert',
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
         path: '/horizontal/timelines/advanced',
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
         path: '/horizontal/ui-elements/app-bars',
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
         path: '/horizontal/ui-elements/banners',
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
         path: '/horizontal/ui-elements/list-item-groups',
         component: ListItemGroups,
         meta: {
            requiresAuth: true,
            title: 'message.listItemGroups',
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
         path: '/horizontal/ui-elements/slide-groups',
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
         path: '/horizontal/ui-elements/chip-groups',
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
         path: '/horizontal/ui-elements/overlays',
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
         path: '/horizontal/ui-elements/file-input',
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
         path: '/horizontal/ui-elements/color-pickers',
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
         path: '/horizontal/ui-elements/buttons',
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
         path: '/horizontal/ui-elements/cards',
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
         path: '/horizontal/ui-elements/checkbox',
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
         path: '/horizontal/ui-elements/carousel',
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
         path: '/horizontal/ui-elements/chips',
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
         path: '/horizontal/ui-elements/datepicker',
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
         path: '/horizontal/ui-elements/dialog',
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
         path: '/horizontal/ui-elements/grid',
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
         path: '/horizontal/ui-elements/groups',
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
         path: '/horizontal/ui-elements/hover',
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
         path: '/horizontal/ui-elements/images',
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
         path: '/horizontal/ui-elements/input',
         meta: {
            requiresAuth: true,
            title: 'message.input',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/list',
         meta: {
            requiresAuth: true,
            title: 'message.list',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/menu',
         meta: {
            requiresAuth: true,
            title: 'message.menu',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/progress',
         meta: {
            requiresAuth: true,
            title: 'message.progress',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/radio',
         meta: {
            requiresAuth: true,
            title: 'message.radio',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/select',
         meta: {
            requiresAuth: true,
            title: 'message.select',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/ratings',
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
         path: '/horizontal/ui-elements/slider',
         meta: {
            requiresAuth: true,
            title: 'message.slider',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/snackbar',
         meta: {
            requiresAuth: true,
            title: 'message.snackbar',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/tabs',
         meta: {
            requiresAuth: true,
            title: 'message.tabs',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/toolbar',
         meta: {
            requiresAuth: true,
            title: 'message.toolbar',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/tooltip',
         meta: {
            requiresAuth: true,
            title: 'message.tooltip',
            breadcrumb:  [
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
         path: '/horizontal/ui-elements/timepicker',
         meta: {
            requiresAuth: true,
            title: 'message.timepicker',
            breadcrumb:  [
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
         path: '/horizontal/forms/form-validation',
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
         path: '/horizontal/forms/stepper',
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
         path: '/horizontal/charts/vue-chartjs',
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
         path: '/horizontal/charts/vue-echarts',
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
         path: '/horizontal/icons/themify',
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
         path: '/horizontal/icons/material',
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
         path: '/horizontal/tables/simple',
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
         path: '/horizontal/tables/standard',
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
         path: '/horizontal/tables/slots',
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
         path: '/horizontal/tables/selectablerows',
         meta: {
            requiresAuth: true,
            title: 'message.selectable',
            breadcrumb: [
              {
                breadcrumbInactive: 'Tables /'
              },
              {
                breadcrumbActive: 'Selectable rows'
              }
            ]
         }
      },
      {
         component: SearchWithText,
         path: '/horizontal/tables/searchwithtext',
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
         path: '/horizontal/maps/google-maps',
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
         path: '/horizontal/maps/leaflet-maps',
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
         path: '/horizontal/users/user-profile',
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
         path: '/horizontal/users/users-list',
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
         path: '/horizontal/calendar',
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
         path: '/horizontal/editor/quilleditor',
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
         path: '/horizontal/editor/wysiwyg',
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
         path: '/horizontal/drag-drop/vue2dragula',
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
         path: '/horizontal/drag-drop/vuedraggable',
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
         path: '/horizontal/drag-drop/vuedraggableresizeable',
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
         path: '/horizontal/image-cropper',
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
         path: '/horizontal/video-player',
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
         path: '/horizontal/dropzone',
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
