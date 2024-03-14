import { app } from './app'
import { serverPort } from './constants'

app.listen(serverPort, () => console.log(`running at ${serverPort} port.`))