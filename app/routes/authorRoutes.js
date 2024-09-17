const router = require("express").Router();
const { 
    createAuthor,
    getAuthorById,
    getAllAuthors,
    updateAuthor,
    deleteAuthor} = require("../controller/authorController")

router.get("/", getAllAuthors);

router.get("/:id", getAuthorById);


router.post("/", createAuthor)

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);


module.exports = router;