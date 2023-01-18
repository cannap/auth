import {NuxtAuthHandler} from '#auth'
import EmailProvider from 'next-auth/providers/email'
import AzureAD from 'next-auth/providers/azure-ad'
import GithubProvider from 'next-auth/providers/github'
import {TypeORMLegacyAdapter} from "@next-auth/typeorm-legacy-adapter"
import * as entities from '../../../lib/entities'

const envFile = process.env

export default NuxtAuthHandler({
    secret: envFile.CREDENTIALS_SECRET,
    pages: {
        signIn: '/login',
        signOut: '/logout',
        newUser: '/register'
    },
    adapter: TypeORMLegacyAdapter({
        type: 'mysql',
        host: envFile.MYSQL_HOST,
        port: Number(envFile.MYSQL_PORT),
        username: envFile.MYSQL_USER,
        password: envFile.MYSQL_PASSWORD,
        database: envFile.MYSQL_DATABASE
    }, {entities}),
    providers: [
        EmailProvider.default({
            server: {
                host: envFile.EMAIL_SERVER_HOST,
                port: envFile.EMAIL_SERVER_PORT,
                auth: {
                    user: envFile.EMAIL_SERVER_USER,
                    pass: envFile.EMAIL_SERVER_PASSWORD
                }
            },
            from: envFile.EMAIL_FROM,
        }),
        AzureAD.default({
            clientId: envFile.AZURE_ID,
            clientSecret: envFile.AZURE_SECRET,
            tenantId: envFile.AZURE_TENANT
        }),
        GithubProvider.default({
            clientId: envFile.GITHUB_ID,
            clientSecret: envFile.GITHUB_SECRET
        })
    ]
})