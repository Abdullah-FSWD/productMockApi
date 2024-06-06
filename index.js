const express = require("express");
const app = express();
const port = 4000;

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: {
      shortDesc: "This is product 1",
      detailDesc:
        "This is product 1,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: {
      shortDesc: "This is product 2",
      detailDesc:
        "This is product 2,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    description: {
      shortDesc: "This is product 3",
      detailDesc:
        "This is product 3,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    description: {
      shortDesc: "This is product 4",
      detailDesc:
        "This is product 4,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50,
    description: {
      shortDesc: "This is product 5",
      detailDesc:
        "This is product 5,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 6,
    name: "Product 6",
    price: 60,
    description: {
      shortDesc: "This is product 6",
      detailDesc:
        "This is product 6,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70,
    description: {
      shortDesc: "This is product 7",
      detailDesc:
        "This is product 7,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 8,
    name: "Product 8",
    price: 80,
    description: {
      shortDesc: "This is product 8",
      detailDesc:
        "This is product 8,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 9,
    name: "Product 9",
    price: 90,
    description: {
      shortDesc: "This is product 9",
      detailDesc:
        "This is product 9,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 10,
    name: "Product 10",
    price: 100,
    description: {
      shortDesc: "This is product 10",
      detailDesc:
        "This is product 10,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
  {
    id: 11,
    name: "Product 11",
    price: 110,
    description: {
      shortDesc: "This is product 11",
      detailDesc:
        "This is product 11,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magnam voluptatum non esse architecto vitae aliquam eveniet explicabo amet tempore, ullam, illo voluptate, officiis nostrum nemo vel dolore. Reiciendis, ratione.Ducimus ex, consectetur sint modi dolorum et rem quam? Qui rem praesentium, vitae aperiam illum laudantium ab mollitia nostrum odio nobis delectus laborum soluta non, dolorem aut reiciendis corrupti dolore?Nulla, labore? Esse autem atque quaerat perferendis porro illum repellat sed eaque commodi. Quia rem accusantium quae dicta ipsa ipsam illum veniam, voluptatem similique vero! Eius voluptatibus magni facilis. Unde.Rerum labore temporibus rem? Iste, recusandae! Nesciunt nisi aperiam necessitatibus, quae molestiae, numquam dignissimos reprehenderit consequatur ut distinctio vitae. Delectus id nulla, alias neque incidunt nam at tempora nobis cumque.Distinctio numquam culpa voluptates dolorum. Blanditiis, deserunt. Nisi qui, perspiciatis delectus adipisci tenetur recusandae. Aut dolores rem ullam ratione facere non consequuntur, nobis pariatur ex modi earum, iure cumque eos. ",
    },
    image: "https://placehold.co/300x300",
  },
];

// Define the /api/products endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const newProduct = req.body;

  // Simple validation
  if (
    !newProduct.name ||
    !newProduct.price ||
    !newProduct.description ||
    !newProduct.description.shortDesc ||
    !newProduct.description.detailDesc ||
    !newProduct.image
  ) {
    return res
      .status(400)
      .json({
        error:
          "All fields (name, price, description (with shortDesc and detailDesc), image) are required",
      });
  }

  // Generate a new id for the new product
  const newId = products.length ? products[products.length - 1].id + 1 : 1;
  newProduct.id = newId;

  // Add the new product to the products array
  products.push(newProduct);

  // Return the new product
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
