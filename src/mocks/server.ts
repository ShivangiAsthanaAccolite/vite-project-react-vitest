import { restHandlers } from "./handlers";
import { setupServer } from "msw/node";

const server = setupServer(...restHandlers);
export default server;
