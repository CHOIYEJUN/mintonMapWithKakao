import {collection, onSnapshot} from "firebase/firestore";
import {DB} from "../fireBase";

export const pinData = async () => {

        try {
            await onSnapshot(collection(DB, "mintonLocate"), (snapshot) => {

                const makeLocations = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                return makeLocations;
            });
        }catch (e) {
            console.log(e);
            return "error";
        }
}
