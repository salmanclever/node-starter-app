import exprss from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from "compression";
import bodyParser from 'body-parser';
import errorsHandler from './utils/errorsHandler';
import routes from './routes';



const { MORGAN_FORMAT = 'combined' } = process.env;

const app = exprss();

app.use(helmet());
app.use(cors());
app.use(morgan(MORGAN_FORMAT));
app.use(compression());
app.use(bodyParser.json({ limit: '16mb' }));
app.use(errorsHandler);
app.use(routes);

export default app;