'use strict'

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connection.js')

const response = require('../response')

const CommentModel = require('../db/models/comment.js')
const Comment = CommentModel(sequelize, DataTypes)

const CommentsController = {

	async index (req, res) {
		// Get all comments
		try {
			const comments = await Comment.findAll()
			response.success(comments, res)
		} catch(err) { response.internalServerError(err, res) }
	}
}

module.exports = CommentsController
