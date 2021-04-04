import express from "express"
import path from "path"
import http from "http"
import { fileURLToPath } from 'url';

const app = express()
const server = http.createServer(app)
const router = express.Router()

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), './front')))

console.log("site no ar")

export default server