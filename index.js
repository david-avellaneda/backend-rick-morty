const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3001;

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/graphql", {
      params: {
        query: `
          query {
            characters(filter: { species: "Human" }) {
              results {
                id
                name
                status
                image
                species
                location {
                  name
                }
              }
            }
          }
        `,
      },
    });

    res.json(response.data.data.characters.results);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/character/:id", async (req, res) => {
  const characterId = req.params.id; // Obtener el ID desde la URL

  try {
    const response = await axios.get("https://rickandmortyapi.com/graphql", {
      params: {
        query: `
          query {
            character(id: ${characterId}) {
              id
              name
              status
              image
              species
              gender
              origin {
                name
              }
              location {
                name
              }
            }
          }
        `,
      },
    });

    res.json(response.data.data.character); // Devolver el personaje específico
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
