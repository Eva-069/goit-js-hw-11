import { fetchImages } from "./js/pixabay-api.js";
import { renderImages, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".search-form");
const input = form.querySelector("input");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim();

    if (query === "") {
        iziToast.error({ message: "Please enter a search term!" });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const { hits } = await fetchImages(query);

        if (hits.length === 0) {
            iziToast.warning({ message: "Sorry, no images found. Try another query!" });
        } else {
            renderImages(hits);
        }
    } catch (error) {
        iziToast.error({ message: "Something went wrong. Please try again." });
    } finally {
        hideLoader();
    }
});
