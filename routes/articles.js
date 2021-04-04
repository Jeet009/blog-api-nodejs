const express = require("express");
const router = express.Router();
const Article = require("../models/articles");

// Fetching All The Articles
router.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.send(articles);
});

// Add Data To Article Database
router.post("/add", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    article = await article.save();
    res.send("Article Added" + article.id);
  } catch (e) {
    console.log("Couldn't Add", e);
  }
});

// Getting Details Of A Perticular Article
router.get("/:slug", async (req, res) => {
  const articleDetail = await Article.findOne({ slug: req.params.slug });
  res.send(articleDetail);
});

//Deleting Articles
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.send("Article Deleted" + req.params.id);
});

module.exports = router;
