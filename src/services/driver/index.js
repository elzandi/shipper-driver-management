import { API } from "configs";
import { handleAsync } from "utils";
import { store, getDriver } from "modules";

const { dispatch } = store;

export const getDrivers = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getDriver(payload));
    if (err) {
        throw err;
    }

    const data = res.axiosResponse.data;
    dispatch(getDriver(data));
    return data;
};