const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')
const Student = require('../models/student')
const Application = require('../models/application')
const Supervisor = require('../models/supervisor')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  resources: [Student, Application, Supervisor],
  rootPath: '/admin',
  branding: {
    companyName: 'Thepro-Assigner',
    softwareBrothers: false,
  }
})

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'nir@admin.com',
  password: process.env.ADMIN_PASSWORD || 'nirzak',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  }
})

module.exports = router