import { render,screen } from "@testing-library/react";
import Types from "../Types";

test("display product images from server", async() => {
   render( <Types orderType="products"/> )

   const productImages = await screen.findAllByRole("img", {
      name : /product$/i,
   });
   expect(productImages).toHaveLength(2);

   interface User {
      name : string
      imagePath : string
   }

   const altText = productImages.map((element) => element.alt);
   expect(altText).toEqual(["America product", "England product"]);
})