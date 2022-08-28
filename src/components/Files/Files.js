import { storage } from "../../services/firebase"
import { ref, getDownloadURL  } from "firebase/storage"
import { useState } from "react";


export const Getimg = (fileName) => {
    const [img, setimg] = useState(null)
    getDownloadURL(ref(storage, 'images/' + fileName))
    .then((url) => {
        setimg(url)
    })
    .catch((error) => {
      console.log("error itemDetailContainer");
    })
    return img
}