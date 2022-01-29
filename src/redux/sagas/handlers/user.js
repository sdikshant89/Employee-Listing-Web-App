import { call, put } from "@redux-saga/core/effects";
import { setUser } from "../../user";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser);
        // requestGetUser returns an axios request
        const { data } = response;
        // redux saga way to dispatch a function/action is yeild
        yield put(setUser(data));
    }
    catch (error){
        console.log(error);
    }
}