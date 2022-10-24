import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../fireConnect";
const auth = getAuth();
// { email: email, memes: [{meme: "", comment: ""}]}




export const getFavoriteMeme = async (memeId) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "user", user.uid))
            let userValues = JSON.parse(docSnap)
            const memeArrayPosition = userValues.memes.findIndex(x=>x.memeId == memeId)
            return userValues.memes[memeArrayPosition]
        }else {

        }
    });
}

export const addFavoriteMeme = async (memeId, memeToAdd, comment) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "user", user.uid))
            let userValues = JSON.parse(docSnap)
            userValues.memes.push({memeId: memeId, memeFavorite: memeToAdd, memeComment:comment})
            const userValuesUpdatedJSON = JSON.stringify(userValues)
            await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);
        }else {

        }
    });
}
export const deleteFavoriteMeme = async (memeId) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "user", user.uid))
            let userValues = JSON.parse(docSnap)
            const memeArrayPosition = userValues.memes.findIndex(x=>x.memeId == memeId)
            userValues.memes.splice(memeArrayPosition, 1)
            const userValuesUpdatedJSON = JSON.stringify(userValues)
            await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);
        }else {

        }
    });
}
export const updateFavoriteMemeComment = async (memeId, newComment) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "user", user.uid))
            let userValues = JSON.parse(docSnap)
            const memeArrayPosition = userValues.memes.findIndex(x=>x.memeId == memeId)
            userValues.memes[memeArrayPosition].memeComment = newComment;
            const userValuesUpdatedJSON = JSON.stringify(userValues)
            await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);
        }else {

        }
    });

}

