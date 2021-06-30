const authConfig = {
    credentials: {
        tenantID: "Enter_the_Tenant_Info_Here",
        clientID: "Enter_the_Application_Id_Here",
    },
    metadata: {
        authority: "login.microsoftonline.com",
        discovery: ".well-known/openid-configuration",
        version: "v2.0"
    },
    settings: {
        validateIssuer: true,
        passReqToCallback: false,
        loggingLevel: "info"
    },
    protectedRoutes: {
        todolist: {
            endpoint: "/api",
            scopes: ["access_as_user"]
        }
    },
    accessMatrix: {
        todolist: {
            path: "/todolist",
            methods: ["DELETE"],
            claims: "c1"
        },
    }
}

module.exports = authConfig;