const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "La recette doit avoir un titre"]
    },
    ingredients: {
        type: Array,
        required: [true, "La recette doit comporter des ingrédients"]
    },
    instructions: {
        type: Array,
        required: [true, "La recette doit avoir des instructions"]
    },
    preparationTime: {
        type: Number,
        required: [true, "La recette doit avoir un tempos de préparation"]
    },
    cookingTime: {
        type: Number,
        required: [true, "La recette doit avoir un temps de cuisson"]
    },
    difficulty: {
        type: String,
        required: [true, "La recette doit avoir un niveau de difficulté"]
    },
    category: {
        type: String,
        required: [true, "La recette doit avoir une catégorie"]
    },
    image: {
        type: String
    }

});

const recipeModel = mongoose.model("recipes", recipeSchema);
module.exports = recipeModel;