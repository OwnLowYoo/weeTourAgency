import express from "express";
import {
    createTour,
    deleteTour,
    getAllTour, getFeaturedTour,
    getSingleTour,
    getTourBySearch,
    updateTour
} from "../controllers/tourController.js";

const router = express.Router();
//create new tour
router.post("/", createTour);

//update tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//create new tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);


export default router;