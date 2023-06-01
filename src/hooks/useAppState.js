import { useContext } from "react";
import { appContext } from "../context/appState";

export default function useAppState() {
    return useContext(appContext);
}
