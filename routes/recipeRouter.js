const recipeModel = require("../models/recipeModel");
const recipeRouter = require("express").Router();

recipeRouter.get("/recipes", async (req, res) =>{
    try{
        let recipes = await recipeModel.find();
        res.send(recipes);
    }catch (error){
        res.send(error);
    }
});


recipeRouter.post("/recipes", async (req, res) =>{
    try{
        let newRecipe = new recipeModel(req.body);
        newRecipe.save();
        res.send("Recette créée avec succès.");
    }catch (error){
        res.send(error);
    }
});

recipeRouter.get("/recipes/:title", async (req, res) =>{
    try{
        let recipe = await recipeModel.findOne({"title": req.params.title});
        res.send(recipe);
    }catch (error){
        res.send(error);
    }
});


recipeRouter.get("/recipes/by-ingredients/:ingredients", async (req, res) =>{
    try{
        let recipe = await recipeModel.find({"ingredients": req.params.ingredients});
        res.send(recipe);
    }catch (error){
        res.send(error);
    }
});


recipeRouter.get("/recipes/by-category/:category", async (req, res) =>{
    try{
        let recipe = await recipeModel.find({"category": req.params.category});
        res.send(recipe);
    }catch (error){
        res.send(error);
    }
});

recipeRouter.get("/recipes/by-id/:id", async (req, res) =>{
    try{
        let recipe = await recipeModel.findOne({"_id": req.params.id});
        res.send(recipe);
    }catch (error){
        res.send(error);
    }
});

recipeRouter.put("/recipes/by-id/:id", async (req, res) =>{
    try{
        await recipeModel.updateOne({_id: req.params.id}, req.body);
        res.send("Recette modifiée.");
    }catch (error){
        res.send(error);
    }
});
recipeRouter.delete("/recipes/delete/:id", async (req, res) =>{
    try{
        await recipeModel.deleteOne({_id: req.params.id});
        res.send("Recette supprimée.");
    }catch (error){
        res.send(error);
    }
});

module.exports = recipeRouter;
