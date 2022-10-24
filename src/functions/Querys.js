import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../fireConnect";
const auth = getAuth();
// { email: email, memes: [{meme: "", comment: ""}]}















export const getFavoriteMeme = async (userId, memeId) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = JSON.parse(docSnap)
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    return userValues.memes[memeArrayPosition]
}

export const addFavoriteMeme = async (userId, memeId, memeToAdd, comment) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = JSON.parse(docSnap)
    userValues.memes.push({ memeId: memeId, memeFavorite: memeToAdd, memeComment: comment })
    const userValuesUpdatedJSON = JSON.stringify(userValues)
    await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);
}
export const deleteFavoriteMeme = async (userId, memeId) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = JSON.parse(docSnap)
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    userValues.memes.splice(memeArrayPosition, 1)
    const userValuesUpdatedJSON = JSON.stringify(userValues)
    await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);

}
export const updateFavoriteMemeComment = async (userId,memeId, newComment) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = JSON.parse(docSnap)
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    userValues.memes[memeArrayPosition].memeComment = newComment;
    const userValuesUpdatedJSON = JSON.stringify(userValues)
    await setDoc(doc(db, "user", uid), userValuesUpdatedJSON);
}

