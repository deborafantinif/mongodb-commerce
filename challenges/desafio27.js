db.produtos.find({
  nome: {
    $regex: "Mc",
    $options: "i",
  },
}).count();