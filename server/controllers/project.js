//controller
//import mongoose from 'mongoose';
const Project = require("../models/project");

// create new project
exports.project_create = function createProject(req, res) {
    const project = new Project({
        code: req.body.code,
        name: req.body.name,
        type_project: req.body.type_project,
        total_cost: req.body.total_cost,
    });

    return project
        .save()
        .then((newProject) => {
            return res.status(201).json({
                success: true,
                message: "Một dự án mới vừa được thêm.",
                Project: newProject,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: error.message,
            });
        });
};
// get all project
exports.project_getAll = function getAll(req, res) {
    Project.find()
        .select("_id code name type_project total_cost")
        .then((allProject) => {
            return res.status(200).json({
                success: true,
                message: "Danh sách tất cả các dự án",
                Project: allProject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: err.message,
            });
        });
};
// get single Project
exports.project_getSingle = function getSingleProject(req, res) {
    const id = req.params.projectId;
    Project.findById(id)
        .then((singleProject) => {
            res.status(200).json({
                success: true,
                // ////////////////////////////////
                message: `Đã tìm thấy dự án tên là :  ${singleProject.name}`,
                Project: singleProject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Không tìm thấy dự án nào.",
                error: err.message,
            });
        });
};
// update
exports.project_update = function updateProject(req, res) {
    const id = req.params.projectId;
    const updateObject = req.body;
    Project.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Thay đổi đã được lưu.",
                updateProject: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            });
        });
};
// delete
exports.project_delete = function deleteProject(req, res) {
    const id = req.params.projectId;
    Project.findByIdAndRemove(id)
        .exec()
        .then(() =>
            res.status(204).json({
                success: true,
                message: "Xóa thành công.",
            })
        )
        .catch((err) =>
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            })
        );
};