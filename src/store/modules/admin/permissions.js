const Permissions = {

    actions: {
        view: 1,
        create: 2,
        update: 3,
        delete: 4
    },

    resources: {
        user: {
            id: 1,
            name: "User"
        },
        admin: {
            id: 2,
            name: "Admin"
        },
        category: {
            id: 3,
            name: "Category"
        },
        ad: {
            id: 4,
            name: "Ad"
        },
        terms: {
            id: 5,
            name: "Terms"
        },
        permission: {
            id: 6,
            name: "Permissions"
        },
        featuredPackage: {
            id: 7,
            name: "Featured Packages"
        },
        contactUsReport: {
            id: 8,
            name: "Contact Us Reports"
        },
        notificationMessage: {
            id: 9,
            name: "Notification Messages"
        },
        notification: {
            id: 10,
            name: "Notifications"
        },
        adReportCategory: {
            id: 11,
            name: "Report Category"
        },
        adReport: {
            id: 12,
            name: "Ad Report"
        }
    }
}

export default Permissions;