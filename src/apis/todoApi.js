import { api, axios } from "boot/axios";
import qs from "qs";

const todoRouter = `/api/todo`;

const token = {
    create : null,
    list : null,
    update : null,
    remove : null,
    reset : null,
};

const create = async(payload) => {
    try {
        if(token.create != null) token.create = token.create.cancel("Create cancel");
        
        token.create = axios.CancelToken.source();

        const res = await api.post(`${todoRouter}`, payload, {
            cancelToken : token.create.token
        });

        return res;
    }

    catch (e) {
        console.error({ err : e });
        return false;
    }
};

const list = async (payload) => {
    try {
        if(token.list != null) token.list = token.list.cancel("cancel list");

        token.list = axios.CancelToken.source();

        const query = qs.stringify(payload);
        const result = await api.get(`${todoRouter}?${query}`, payload, {
            cancelToken : token.list.token
        });

        return result;
    }
    catch (e) {
        console.error({ err : e });
        return false;
    }
};

const update = async (payload) => {
    try {
        if(token.update != null) token.update = token.update.cancel("cancel update");

        token.update = axios.CancelToken.source();

        const id = payload.id;
        const result = api.put(`${todoRouter}/${id}`, payload, {
            cancelToken : token.list.token
        });

        return result;
    }

    catch (e) {
        console.error({ err : e });
        return false;
    }
};

const remove = async (payload) => {
    try {
        if(token.remove != null) token.remove = token.remove.cancel("cancel remove");

        token.remove = axios.CancelToken.source();

        const id = payload.id;
        const result = api.delete(`${todoRouter}/${id}`, {
            cancelToken : token.remove.token
        });

        return result;
    }

    catch (e) {
        console.error({ err : e });
        return false;
    }
};

const reset = async (payload) => {
    try {
        if(token.reset != null) token.reset = token.reset.cancel("cancel reset");

        token.reset = axios.CancelToken.source();
        const result = await api.post(`${todoRouter}/reset`, payload, {
            cancelToken : token.reset.token
        });

        return result;
    }

    catch (e) {
        console.error({ err : e });
        return false;
    }
};

export default { create, list, update, remove, reset };