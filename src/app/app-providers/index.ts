import compose from "compose-function";
import {withJobs} from "./with-jobs";

export const withProviders = compose(withJobs);