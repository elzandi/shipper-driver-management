import appConfig from "configs/appConfigs";

export const config = appConfig;

const baseUrl = {
    driver: `${config.url.api}api/`,
};

export default baseUrl;