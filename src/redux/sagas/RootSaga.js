import { takeLatest } from "@redux-saga/core/effects";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "../user"

export function* watcherSaga(){
    yield takeLatest(GET_USER, handleGetUser);
}