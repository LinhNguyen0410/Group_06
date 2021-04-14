//router
const express = require("express");
const Project = require("../controllers/project");

const router = express.Router();
//create a new Project
router.post("/projects", Project.project_create);

// get all Project
router.get("/projects", Project.project_getAll);

// get single Project
router.get("/projects/:projectId", Project.project_getSingle);

//update
router.patch("/projects/:projectId", Project.project_update);

// delete Project dung delete
router.delete("/projects/:projectId", Project.project_delete);

module.exports = router;