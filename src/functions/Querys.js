import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../fireConnect";


export const getFavoriteMeme = async (userId, memeId) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = JSON.parse(docSnap)
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    return userValues.memes[memeArrayPosition]
}
export const getFavoriteMemes = async (userId) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data()
      } else {
        console.log("No such document!");
      }
}

export const addFavoriteMeme = async (userId, memeId, memeToAdd, comment) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = docSnap.data()
    userValues.memes.push({ memeId: memeId, memeFavorite: memeToAdd, memeComment: comment })
    await setDoc(doc(db, "user", userId), userValues);
}
export const deleteFavoriteMeme = async (userId, memeId) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = docSnap.data()
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    userValues.memes.splice(memeArrayPosition, 1)
    await setDoc(doc(db, "user", userId), userValues);
}

export const deleteMemeFavorite = async (userId, memeFavorite) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = docSnap.data()
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeFavorite == memeFavorite)
    userValues.memes.splice(memeArrayPosition, 1)
    await setDoc(doc(db, "user", userId), userValues);

}

export const updateFavoriteMemeComment = async (userId,memeId, newComment) => {
    const docSnap = await getDoc(doc(db, "user", userId))
    let userValues = docSnap.data()
    const memeArrayPosition = userValues.memes.findIndex(x => x.memeId == memeId)
    userValues.memes[memeArrayPosition].memeComment = newComment;
    await setDoc(doc(db, "user", userId), userValues);
}

